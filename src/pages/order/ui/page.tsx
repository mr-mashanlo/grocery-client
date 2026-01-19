import { type FC } from 'react';

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

      <div className="px-4 py-10 pb-19 sm:p-37.5">
        <SingleOrder />
      </div>
    </>
  );
};

export default OrderPage;