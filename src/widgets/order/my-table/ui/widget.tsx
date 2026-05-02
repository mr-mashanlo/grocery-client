import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { useMyOrders } from '@/entities/order';

import Header from './header';
import Pagination from './pagination';
import Table from './table';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const MyOrderTable: FC<Props> = ( { className, ...props } ) => {
  const [ searchParams ] = useSearchParams();
  const { orders } = useMyOrders( Object.fromEntries( searchParams.entries() ) );

  return (
    <section className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20', className )} {...props}>
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

export default MyOrderTable;