import { Provider } from 'react-redux';
import { store, persistor } from '~/store';
import { ThemeSynchronizer } from '~/store/theme-sync';
import { useEffect, useState, lazy, Suspense } from 'react';

// Lazy-load PersistGate only on the client to avoid ESM directory import issue during SSR
const PersistGateClient = lazy(() =>
  import('redux-persist/lib/integration/react').then((mod) => ({
    default: mod.PersistGate,
  }))
);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Provider store={store}>{children}</Provider>;
  }

  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <PersistGateClient loading={null} persistor={persistor}>
          <ThemeSynchronizer />
          {children}
        </PersistGateClient>
      </Suspense>
    </Provider>
  );
}
