import { type FC } from 'react';

import { AllOrders } from '@/widgets/all-orders';

export const AdminOrdersPage: FC = () => {
  return (
    <>
      <title>Orders | Grocery</title>
      <meta property="og:title" content="Orders | Grocery" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-10 pb-19 sm:p-37.5">
        <AllOrders />
      </div>
    </>
  );
};

export default AdminOrdersPage;