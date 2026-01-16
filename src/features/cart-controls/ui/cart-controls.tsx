import { type FC } from 'react';

import { useCartStore } from '@/entities/cart';

interface Props {
  productId: string,
  quantity: number
}

const CartControls: FC<Props> = ( { productId, quantity } ) => {
  const { increase, decrease, getQuantity } = useCartStore();

  return (
    <div className="flex">
      <button onClick={() => decrease( productId )} className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200 cursor-pointer">-</button>
      <p className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200">{getQuantity( productId )}</p>
      <button onClick={getQuantity( productId ) < quantity ? () => increase( productId ) : () => {}} className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200 cursor-pointer">+</button>
    </div>
  );
};

export default CartControls;