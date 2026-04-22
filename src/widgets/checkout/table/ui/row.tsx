import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';

import { type Cart } from '@/entities/cart';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  product: Cart
}

const Row: FC<Props> = ( { product } ) => {
  return (
    <tr className="border-t border-zinc-200">
      <td className="p-3"></td>
      <td><img src={product.image.url} alt={product.image.alt} className="block w-full aspect-square object-cover" /></td>
      <td className="p-3">{product.name}</td>
      <td className="p-3">${product.price}</td>
      <td className="p-3">{product.quantity} items</td>
      <td className="p-3">${product.price * product.quantity}</td>
    </tr>
  );
};

export default Row;