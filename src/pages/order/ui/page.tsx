import { type FC } from 'react';
import { Link } from 'react-router';

import { OrderProducts } from '@/widgets/order-products';

export const OrdersPage: FC = () => {
  return (
    <>
      <title>Grocery</title>
      <meta property="og:title" content="Grocery" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-10 pb-19 sm:p-15 sm:pb-20">
        <OrderProducts />
        <div className="w-full sm:w-150 grid grid-cols-4 items-center fixed bottom-0 left-0">
          <p className="p-5 col-span-3 sm:col-span-2 text-left bg-zinc-100">0</p>
          <Link to="/" className="block p-5 bg-zinc-200 text-center">Back</Link>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;