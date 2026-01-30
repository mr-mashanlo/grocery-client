import { type FC } from 'react';

import { Header } from '@/widgets/header';
import { OrdersGrid } from '@/widgets/orders-grid';

export const OrdersPage: FC = () => {
  return (
    <>
      <title>My Orders | Grocery</title>
      <meta property="og:title" content="My Orders | Grocery" />
      <meta name="description" content="Track and manage all your grocery orders in one place" />
      <meta property="og:description" content="Track and manage all your grocery orders in one place" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-8 sm:px-25 sm:py-12.5">
        <Header />
        <OrdersGrid className="mt-25 sm:mt-50" />
      </div>
    </>
  );
};

export default OrdersPage;