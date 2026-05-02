import { type FC } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';

import { TopProgressBar } from '@/shared/ui/top-progress-bar';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

const StoreLayout: FC = () => {
  return (
    <>
      <ScrollRestoration />
      <TopProgressBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default StoreLayout;