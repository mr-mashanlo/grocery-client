import { type FC } from 'react';

import { MyOrders } from '@/widgets/my-orders';

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

      <div className="px-4 py-10 pb-19 sm:p-37.5">
        <MyOrders />
      </div>
    </>
  );
};

export default OrdersPage;