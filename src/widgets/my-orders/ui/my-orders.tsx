import { type FC } from 'react';

import { useMyOrders } from '@/entities/order';
import { OrderCard } from '@/entities/order';

const MyOrders: FC = () => {
  const { orders } = useMyOrders( { sort: 'createdAt', order: 'desc' } );

  return (
    <section>
      <h2 className="mb-8 sm:mb-15 text-4xl font-bold">My Orders</h2>
      {orders.data?.length
        ?
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
          {orders.data?.map( order => <OrderCard key={order._id} order={order} /> )}
        </div>
        :
        <div className="text-center">
          <p>You have no orders. Add items and complete checkout to see orders here</p>
        </div>
      }
    </section>
  );
};

export default MyOrders;