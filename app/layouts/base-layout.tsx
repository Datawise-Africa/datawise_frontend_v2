import Footer from '~/components/footer';
import Header from '~/components/header';
import { Outlet } from 'react-router';

export default function BaseLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
