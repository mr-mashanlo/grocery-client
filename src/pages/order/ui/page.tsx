import { type FC } from 'react';

import { Header } from '@/widgets/header';
import { SingleOrder } from '@/widgets/single-order';

export const OrderPage: FC = () => {
  return (
    <>
      <title>Order Details | Grocery</title>
      <meta property="og:title" content="Order Details | Grocery" />
      <meta name="description" content="View details and status of your grocery order" />
      <meta property="og:description" content="View details and status of your grocery order" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-8 sm:px-25 sm:py-12.5">
        <Header />
        <SingleOrder className="mt-25 sm:mt-50" />


      </div>
    </>
  );
};

export default OrderPage;