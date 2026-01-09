import { type FC } from 'react';

import type { Order } from '../model/schema';

interface Props {
  order: Order
}

const OrderCard: FC<Props> = ( { order } ) => {
  return (
    <article className="bg-zinc-100 rounded-2xl">
      <div className="flex">
        <p className="w-12.5 h-12.5 flex items-center justify-center font-bold">0</p>
        <p className="h-12.5 px-3 flex items-center grow border-l border-zinc-200 font-bold">{order.createdAt}</p>
        <p className="w-25 h-12.5 flex items-center justify-center border-l border-zinc-200 font-bold">${order.totalPrice}</p>
        <p className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200 font-bold">{order.totalQuantity}</p>
      </div>
      {order.products.map( product => (
        <div key={product.product} className="flex border-t border-zinc-200">
          <p className="w-12.5 h-12.5 px-3 flex items-center grow"><span className="line-clamp-1">{product.product}</span></p>
          <p className="w-25 h-12.5 flex items-center justify-center border-l border-zinc-200">${product.price}</p>
          <p className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200">{product.quantity}</p>
        </div>
      ) )}
    </article>
  );
};

export default OrderCard;