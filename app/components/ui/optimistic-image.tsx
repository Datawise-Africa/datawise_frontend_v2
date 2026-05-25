import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type ImgHTMLAttributes,
} from 'react';
import { cn } from '~/lib/utils';

type OptimisticImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'onLoad' | 'onError'
> & {
  fallbackSrc?: string;
  wrapperClassName?: string;
};

export function OptimisticImage({
  className,
  wrapperClassName,
  fallbackSrc = '/placeholder.svg',
  src,
  alt,
  ...props
}: OptimisticImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => {
    setErrored(true);
    setLoaded(true);
  }, []);

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      {!loaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
      <img
        ref={imgRef}
        src={errored ? fallbackSrc : src}
        alt={alt}
        className={cn(
          'transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}
