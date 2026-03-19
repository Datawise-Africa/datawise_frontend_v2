import { Provider } from 'react-redux';
import { store, persistor } from '~/store';
import { ThemeSynchronizer } from '~/store/theme-sync';
import { useEffect, useState, Suspense } from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';

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
        <PersistGate loading={null} persistor={persistor}>
          <ThemeSynchronizer />
          {children}
        </PersistGate>
      </Suspense>
    </Provider>
  );
}
