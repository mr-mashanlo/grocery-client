import { type FC } from 'react';

import { useOrders } from '@/entities/order';
import { OrderCard } from '@/entities/order';

const OrderProducts: FC = () => {
  const { orders } = useOrders( { sort: '-1' } );

  return (
    <section>
      <h2 className="mb-8 sm:mb-15 text-4xl font-bold">Orders</h2>
      <div className="grid grid-cols-3 gap-4 sm:gap-7.5">
        {orders.data?.data.map( order => <OrderCard key={order._id} order={order} /> )}
      </div>
    </section>
  );
};

export default OrderProducts;