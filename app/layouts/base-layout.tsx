import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet } from 'react-router';
import ContextProviderLayout from './context-provider-layout';

export default function BaseLayout() {
  return (
    <ContextProviderLayout>
      <Header />

      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </ContextProviderLayout>
  );
}
