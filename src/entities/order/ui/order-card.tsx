import { type FC } from 'react';
import { Link } from 'react-router';

import type { Order } from '../model/schema';

interface Props {
  order: Order,
  isAdmin?: boolean
}

const OrderCard: FC<Props> = ( { order, isAdmin } ) => {
  return (
    <article className="flex bg-zinc-100 rounded-2xl">
      <img src="https://placehold.co/400" alt={order._id} className="w-25 h-25 bg-zinc-200 rounded-s-2xl" />
      <div className="w-full">
        <div className="flex">
          <h3 className="w-12.5 h-12.5 px-3 flex items-center grow font-bold"><Link to={`${isAdmin ? '/admin' : ''}/orders/${order._id}`} className="line-clamp-1">Order #{order._id.slice( -6 )}</Link></h3>
          <p className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200">{order.totalQuantity}</p>
        </div>
        <div className="flex border-t border-zinc-200">
          <p className="w-25 h-12.5 px-3 flex items-center">${order.totalPrice}</p>
          <p className="h-12.5 flex items-center justify-center grow text-center border-l border-zinc-200">{order.createdAt}</p>
        </div>
      </div>
    </article>
  );
};

export default OrderCard;