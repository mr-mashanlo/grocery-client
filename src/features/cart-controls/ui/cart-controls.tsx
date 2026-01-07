import { type FC } from 'react';

import { useCartStore } from '@/entities/cart';

interface Props {
  product: string
}

const CartControls: FC<Props> = ( { product } ) => {
  const { increase, decrease, getQuantity } = useCartStore();

  return (
    <div className="flex">
      <button onClick={() => decrease( product )} className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200 cursor-pointer">-</button>
      <p className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200">{getQuantity( product )}</p>
      <button onClick={() => increase( product )} className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200 cursor-pointer">+</button>
    </div>
  );
};

export default CartControls;