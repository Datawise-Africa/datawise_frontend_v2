import Footer from '~/components/footer';
import Header from '~/components/header';
import { Outlet } from 'react-router';

export default function BaseLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100svh-5rem)] overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
