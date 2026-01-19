import { type FC } from 'react';

import { UpdateOrderStatusForm } from '@/features/update-order-status-form';
import { SingleOrder } from '@/widgets/single-order';

export const AdminOrderPage: FC = () => {
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
        <UpdateOrderStatusForm className="w-full sm:w-150 grid grid-cols-3 items-center fixed bottom-0 left-0" />
      </div>
    </>
  );
};

export default AdminOrderPage;