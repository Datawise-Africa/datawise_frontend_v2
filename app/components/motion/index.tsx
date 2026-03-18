import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

// ─── Default transition presets ─────────────────────────────────────
export const transitions = {
  spring: { type: 'spring', stiffness: 100, damping: 15 },
  smooth: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  quick: { duration: 0.3, ease: 'easeOut' },
  slow: { duration: 0.8, ease: 'easeOut' },
} as const;

// ─── Reusable variant presets ───────────────────────────────────────
export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} satisfies Record<string, Variants>;

// ─── FadeIn ─────────────────────────────────────────────────────────
// Fade + optional translate. Triggers on scroll by default.
type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type FadeInProps = HTMLMotionProps<'div'> & {
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  children: ReactNode;
};

const directionOffset = (dir: Direction, dist: number) => {
  switch (dir) {
    case 'up':
      return { y: dist };
    case 'down':
      return { y: -dist };
    case 'left':
      return { x: dist };
    case 'right':
      return { x: -dist };
    default:
      return {};
  }
};

export function FadeIn({
  direction = 'up',
  distance = 24,
  delay = 0,
  duration = 0.5,
  once = true,
  children,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerChildren ────────────────────────────────────────────────
// Wraps children so each animates in sequence.
type StaggerChildrenProps = HTMLMotionProps<'div'> & {
  stagger?: number;
  once?: boolean;
  children: ReactNode;
};

export function StaggerChildren({
  stagger = 0.1,
  once = true,
  children,
  ...rest
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ────────────────────────────────────────────────────
// Use inside <StaggerChildren>. Animates per the chosen variant.
type StaggerItemProps = HTMLMotionProps<'div'> & {
  variant?: keyof typeof variants;
  duration?: number;
  children: ReactNode;
};

export function StaggerItem({
  variant = 'fadeUp',
  duration = 0.5,
  children,
  ...rest
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        ...variants[variant],
        visible: {
          ...variants[variant].visible,
          transition: { duration, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── ScaleOnHover ───────────────────────────────────────────────────
type ScaleOnHoverProps = HTMLMotionProps<'div'> & {
  scale?: number;
  children: ReactNode;
};

export function ScaleOnHover({
  scale = 1.03,
  children,
  ...rest
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={transitions.quick}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── AnimatedCounter ────────────────────────────────────────────────
// Counts up from 0 to `value` when in view.
type AnimatedCounterProps = {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({
  value,
  duration = 1.5,
  suffix = '',
  className,
}: AnimatedCounterProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration }}
      >
        {value}
        {suffix}
      </motion.span>
    </motion.span>
  );
}

// ─── PageTransition ─────────────────────────────────────────────────
// Wrap a route component to fade in on mount.
type PageTransitionProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
};

export function PageTransition({ children, ...rest }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitions.smooth}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── Re-export motion for convenience ───────────────────────────────
export { motion };
