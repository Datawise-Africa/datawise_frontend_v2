import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';

export interface ThemeState {
  primaryHue: number;
  secondaryHue: number;
  tertiaryHue: number;
  fontFamily: string;
  fontMono: string;
  borderRadius: number;
  borderWidth: number;
  darkMode: boolean;
}

const DEFAULT_THEME: ThemeState = {
  primaryHue: 260,
  secondaryHue: 160,
  tertiaryHue: 30,
  fontFamily: "'Sora Variable', system-ui, -apple-system, sans-serif",
  fontMono: "'Lora Variable', ui-serif, Georgia, serif",
  borderRadius: 0.5,
  borderWidth: 1,
  darkMode: false,
};

const COOKIE_KEY = 'datawise-theme';
const MAX_AGE = 60 * 60 * 24 * 365;

function readCookie(): Partial<ThemeState> {
  if (typeof document === 'undefined') return {};
  try {
    const match = document.cookie
      .split('; ')
      .find((c) => c.startsWith(`${COOKIE_KEY}=`));
    if (!match) return {};
    return JSON.parse(decodeURIComponent(match.split('=').slice(1).join('=')));
  } catch {
    return {};
  }
}

function writeCookie(state: ThemeState) {
  if (typeof document === 'undefined') return;
  const value = encodeURIComponent(JSON.stringify(state));
  const secure = location.protocol === 'https:' ? '; secure' : '';
  document.cookie = `${COOKIE_KEY}=${value}; path=/; max-age=${MAX_AGE}; samesite=lax${secure}`;
}

type ThemeAction =
  | { type: 'UPDATE'; payload: Partial<ThemeState> }
  | { type: 'TOGGLE_DARK' }
  | { type: 'SET_DARK'; payload: boolean }
  | { type: 'RESET' };

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...action.payload };
    case 'TOGGLE_DARK':
      return { ...state, darkMode: !state.darkMode };
    case 'SET_DARK':
      return { ...state, darkMode: action.payload };
    case 'RESET':
      return DEFAULT_THEME;
  }
}

interface ThemeContextValue {
  state: ThemeState;
  darkMode: boolean;
  toggle: () => void;
  setMode: (dark: boolean) => void;
  updateTheme: (partial: Partial<ThemeState>) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, DEFAULT_THEME, (init) => ({
    ...init,
    ...readCookie(),
  }));

  const toggle = useCallback(() => dispatch({ type: 'TOGGLE_DARK' }), []);
  const setMode = useCallback(
    (dark: boolean) => dispatch({ type: 'SET_DARK', payload: dark }),
    []
  );
  const updateTheme = useCallback(
    (partial: Partial<ThemeState>) =>
      dispatch({ type: 'UPDATE', payload: partial }),
    []
  );
  const resetTheme = useCallback(() => dispatch({ type: 'RESET' }), []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    dispatch({ type: 'SET_DARK', payload: mq.matches });
    const handler = (e: MediaQueryListEvent) =>
      dispatch({ type: 'SET_DARK', payload: e.matches });
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    writeCookie(state);

    const root = document.documentElement;
    root.style.setProperty('--ds-primary-h', String(state.primaryHue));
    root.style.setProperty('--ds-secondary-h', String(state.secondaryHue));
    root.style.setProperty('--ds-tertiary-h', String(state.tertiaryHue));
    root.style.setProperty('--ds-font-family', state.fontFamily);
    root.style.setProperty('--ds-font-mono', state.fontMono);
    root.style.setProperty('--ds-border-radius', `${state.borderRadius}rem`);
    root.style.setProperty('--ds-border-width', `${state.borderWidth}px`);

    if (state.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [state]);

  return (
    <ThemeContext.Provider
      value={{
        state,
        darkMode: state.darkMode,
        toggle,
        setMode,
        updateTheme,
        resetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
