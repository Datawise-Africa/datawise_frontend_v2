import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '~/store';
import { toggleDarkMode, setDarkMode } from '~/store/slices/theme-slice';

export function useTheme() {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  const toggle = useCallback(() => {
    dispatch(toggleDarkMode());
  }, [dispatch]);

  const setMode = useCallback(
    (dark: boolean) => {
      dispatch(setDarkMode(dark));
    },
    [dispatch]
  );

  return {
    darkMode,
    toggle,
    setMode,
  } as const;
}
