import { type FC } from 'react';

import { Header } from '@/widgets/header';
import { MyOrderTable } from '@/widgets/order/my-table';

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

      <Header />
      <section className="mx-4 my-8 sm:mx-10 sm:my-20">
        <h1 className="mb-3 text-xl sm:text-2xl font-semibold">My orders</h1>
        <p className="max-w-2xl leading-[200%]">Corrupti iusto ipsam ad modi, est dolore eum earum aspernatur, id tempore hic. Voluptates fugit provident laudantium tenetur reiciendis magnam.</p>
      </section>
      <MyOrderTable />
    </>
  );
};

export default OrdersPage;