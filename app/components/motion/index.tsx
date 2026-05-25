import {
  createContext,
  useContext,
  Children,
  cloneElement,
  isValidElement,
} from 'react';
import { useInView } from '~/hooks/use-in-view';
import { cn } from '~/lib/utils';
import type { ReactNode, HTMLAttributes, ReactElement } from 'react';

// ─── FadeIn ─────────────────────────────────────────────────────────
type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type FadeInProps = HTMLAttributes<HTMLDivElement> & {
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  children: ReactNode;
};

const directionTransform = (dir: Direction, dist: number) => {
  switch (dir) {
    case 'up':
      return `translateY(${dist}px)`;
    case 'down':
      return `translateY(-${dist}px)`;
    case 'left':
      return `translateX(${dist}px)`;
    case 'right':
      return `translateX(-${dist}px)`;
    default:
      return 'none';
  }
};

export function FadeIn({
  direction = 'up',
  distance = 24,
  delay = 0,
  duration = 0.5,
  once = true,
  children,
  className,
  style,
  ...rest
}: FadeInProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] will-change-[opacity,transform]',
        className
      )}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : directionTransform(direction, distance),
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

// ─── StaggerChildren + StaggerItem ──────────────────────────────────
const StaggerContext = createContext<{ inView: boolean; stagger: number }>({
  inView: false,
  stagger: 0.1,
});

type StaggerChildrenProps = HTMLAttributes<HTMLDivElement> & {
  stagger?: number;
  once?: boolean;
  children: ReactNode;
};

export function StaggerChildren({
  stagger = 0.1,
  once = true,
  children,
  className,
  ...rest
}: StaggerChildrenProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once });

  let index = 0;
  const indexed = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === StaggerItem) {
      return cloneElement(child as ReactElement<StaggerItemProps>, {
        index: index++,
      });
    }
    return child;
  });

  return (
    <StaggerContext.Provider value={{ inView, stagger }}>
      <div ref={ref} className={className} {...rest}>
        {indexed}
      </div>
    </StaggerContext.Provider>
  );
}

type StaggerItemProps = HTMLAttributes<HTMLDivElement> & {
  index?: number;
  duration?: number;
  children: ReactNode;
};

export function StaggerItem({
  index = 0,
  duration = 0.5,
  children,
  className,
  style,
  ...rest
}: StaggerItemProps) {
  const { inView, stagger } = useContext(StaggerContext);

  return (
    <div
      className={cn(
        'transition-[opacity,transform] will-change-[opacity,transform]',
        className
      )}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transitionDuration: `${duration}s`,
        transitionDelay: `${stagger * index}s`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
