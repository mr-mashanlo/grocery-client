import { type FC } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';

import { TopProgressBar } from '@/shared/ui/top-progress-bar';

const AdminLayout: FC = () => {
  return (
    <>
      <ScrollRestoration />
      <TopProgressBar />
      <Outlet />
    </>
  );
};

export default AdminLayout;