import { useState, useEffect, useEffectEvent } from 'react';
import { useIsClient } from '~/hooks/use-is-client';

const MOBILE_BREAKPOINT = 1024;

export function useIsMobile(): boolean {
  const isClient = useIsClient();
  const [isMobile, setIsMobile] = useState(false);

  const handleChange = useEffectEvent((e: MediaQueryListEvent) => {
    setIsMobile(!e.matches);
  });

  useEffect(() => {
    if (!isClient) return;
    const mql = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    setIsMobile(!mql.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [isClient]);

  return isMobile;
}
