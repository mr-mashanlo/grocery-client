import { type FC } from 'react';
import { useSearchParams } from 'react-router';

import { useOrders } from '@/entities/order';

import Header from './header';
import Pagination from './pagination';
import Table from './table';

const OrderTable: FC = () => {
  const [ searchParams ] = useSearchParams();
  const { orders } = useOrders( Object.fromEntries( searchParams.entries() ) );

  return (
    <section className="m-4 sm:m-10">
      <div className="border border-zinc-200 rounded-md">
        <div className="border-b border-zinc-200">
          <Header />
        </div>
        <div className="overflow-auto">
          <Table orders={orders.data?.data || []} />
        </div>
        <div className="border-t border-zinc-200">
          <Pagination limit={orders.data?.limit || 1} page={orders.data?.page || 1} total={orders.data?.total || 0} />
        </div>
      </div>
    </section>
  );
};

export default OrderTable;