import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  token: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
}

const DEFAULT_AUTH: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const COOKIE_KEY = 'datawise-auth';
const MAX_AGE = 60 * 60 * 24 * 365;

function readCookie(): AuthState {
  if (typeof document === 'undefined') return DEFAULT_AUTH;
  try {
    const match = document.cookie
      .split('; ')
      .find((c) => c.startsWith(`${COOKIE_KEY}=`));
    if (!match) return DEFAULT_AUTH;
    return {
      ...DEFAULT_AUTH,
      ...JSON.parse(decodeURIComponent(match.split('=').slice(1).join('='))),
    };
  } catch {
    return DEFAULT_AUTH;
  }
}

function writeCookie(state: AuthState) {
  if (typeof document === 'undefined') return;
  if (!state.isAuthenticated) {
    document.cookie = `${COOKIE_KEY}=; path=/; max-age=0`;
    return;
  }
  const value = encodeURIComponent(JSON.stringify(state));
  const secure = location.protocol === 'https:' ? '; secure' : '';
  document.cookie = `${COOKIE_KEY}=${value}; path=/; max-age=${MAX_AGE}; samesite=strict${secure}`;
}

type AuthAction =
  | { type: 'SET_CREDENTIALS'; payload: { token: string; user: AuthUser } }
  | { type: 'CLEAR' };

function authReducer(_state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      return {
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case 'CLEAR':
      return DEFAULT_AUTH;
  }
}

let _currentToken: string | null = null;
let _clearAuthFn: (() => void) | null = null;

export function getAuthToken(): string | null {
  return _currentToken;
}

export function clearAuthFromInterceptor(): void {
  _clearAuthFn?.();
}

interface AuthContextValue {
  token: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
  setCredentials: (token: string, user: AuthUser) => void;
  clearAuth: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, DEFAULT_AUTH, () =>
    readCookie()
  );

  const setCredentials = useCallback(
    (token: string, user: AuthUser) =>
      dispatch({ type: 'SET_CREDENTIALS', payload: { token, user } }),
    []
  );

  const clearAuth = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  useEffect(() => {
    _currentToken = state.token;
    _clearAuthFn = clearAuth;
  }, [state.token, clearAuth]);

  useEffect(() => {
    writeCookie(state);
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        setCredentials,
        clearAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
