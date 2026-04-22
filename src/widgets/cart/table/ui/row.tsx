import { Minus, Plus } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';

import { type Cart } from '@/entities/cart';
import { AddToCartButton } from '@/features/cart/add-to-cart-button';
import { RemoveFromCartButton } from '@/features/cart/remove-from-cart-button';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  product: Cart
}

const Row: FC<Props> = ( { product } ) => {
  return (
    <tr className="border-t border-zinc-200">
      <td className="w-13.5 h-13.5"></td>
      <td>
        <img src={product.image.url} alt={product.image.alt} className="block w-full aspect-square object-cover" />
      </td>
      <td className="p-3">{product.name}</td>
      <td className="p-3">${product.price}</td>
      <td className="p-3">
        <div className="flex items-center gap-4">
          <RemoveFromCartButton product={product} className="w-7.5 h-7.5 shrink-0 flex items-center justify-center text-center rounded-md cursor-pointer hover:bg-zinc-100">
            <Minus className="w-2.5 h-2.5 stroke-3" />
          </RemoveFromCartButton>
          <span className="w-7.5 text-center">
            {product.quantity}
          </span>
          <AddToCartButton product={product} className="w-7.5 h-7.5 shrink-0 flex items-center justify-center text-center rounded-md cursor-pointer hover:bg-zinc-100">
            <Plus className="w-2.5 h-2.5 stroke-3" />
          </AddToCartButton>
        </div>
      </td>
      <td className="p-3">${product.price * product.quantity}</td>
    </tr>
  );
};

export default Row;