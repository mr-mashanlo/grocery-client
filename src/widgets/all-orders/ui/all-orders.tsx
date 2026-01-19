import { type FC } from 'react';

import { useAllOrders } from '@/entities/order';
import { OrderCard } from '@/entities/order';

const AllOrders: FC = () => {
  const { orders } = useAllOrders( { sort: 'createdAt', order: 'desc' } );

  return (
    <section>
      <h2 className="mb-8 sm:mb-15 text-4xl font-bold">All Orders</h2>
      {orders.data?.length
        ?
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
          {orders.data?.map( order => <OrderCard key={order._id} order={order} /> )}
        </div>
        :
        <div className="text-center">
          <p>There are no orders</p>
        </div>
      }
    </section>
  );
};

export default AllOrders;