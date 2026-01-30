import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';

import { useMyOrders } from '@/entities/order';
import { OrderCard } from '@/entities/order';
import { ProductPagination } from '@/features/product-pagination';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const OrdersGrid: FC<Props> = ( props ) => {
  const [ searchParams ] = useSearchParams();
  const page = searchParams.get( 'page' ) || '';
  const { orders } = useMyOrders( { limit: '18', sort: 'createdAt', order: 'desc', page } );

  return (
    <section {...props}>
      <h2 className="mb-25 sm:mb-50 text-xl sm:text-2xl font-bold text-center">My Orders</h2>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
        {orders.isLoading
          ?
          Array.from( { length: 9 } ).map( ( _, index ) => <div key={index} className="w-full h-25 bg-zinc-100 rounded-2xl animate-pulse"></div> )
          :
          orders.data?.data.map( order => <OrderCard key={order._id} order={order} /> )
        }
      </div>
      <ProductPagination total={orders.data?.total || 0} limit={orders.data?.limit || 0} page={orders.data?.page || 0} className="pt-8 sm:pt-12.5" />
    </section>
  );
};

export default OrdersGrid;