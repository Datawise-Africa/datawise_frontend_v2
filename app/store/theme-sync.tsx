import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '.';
import { setDarkMode } from './slices/theme-slice';

export function ThemeSynchronizer() {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  // Sync with OS preference on mount and when OS preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize from system preference
    dispatch(setDarkMode(mediaQuery.matches));

    // Listen for OS preference changes
    const handler = (e: MediaQueryListEvent) => {
      dispatch(setDarkMode(e.matches));
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [dispatch]);

  // Apply dark class and custom properties
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--ds-primary-h', String(theme.primaryHue));
    root.style.setProperty('--ds-secondary-h', String(theme.secondaryHue));
    root.style.setProperty('--ds-tertiary-h', String(theme.tertiaryHue));
    root.style.setProperty('--ds-font-family', theme.fontFamily);
    root.style.setProperty('--ds-font-mono', theme.fontMono);
    root.style.setProperty('--ds-border-radius', `${theme.borderRadius}rem`);
    root.style.setProperty('--ds-border-width', `${theme.borderWidth}px`);

    if (theme.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return null;
}
