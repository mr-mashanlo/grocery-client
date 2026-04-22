import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';

import { type Order } from '@/entities/order';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  order: Order
}

const Row: FC<Props> = ( { order } ) => {
  return (
    <tr className="border-t border-zinc-200">
      <td className="w-13.5 h-13.5"></td>
      <td className="p-3">{order._id}</td>
      <td className="p-3">{order.status}</td>
      <td className="p-3"><span>${order.total}</span> / <span>{order.quantity} items</span></td>
      <td className="p-3">{order.createdAt}</td>
    </tr>
  );
};

export default Row;