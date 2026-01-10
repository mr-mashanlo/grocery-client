import { type FC } from 'react';
import { Link } from 'react-router';

import { OrderProducts } from '@/widgets/order-products';

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
        <OrderProducts />
        <div className="w-full sm:w-150 grid grid-cols-3 items-center fixed bottom-0 left-0">
          <div className="h-full col-span-2 bg-zinc-100"></div>
          <Link to="/" className="py-5 text-center bg-black text-white">Back</Link>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;