import { type DetailedHTMLProps, type FC, type FormHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { useCartStore } from '@/entities/cart';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>{
  productId: string,
  quantity: number
}

const UpdateQuantityForm: FC<Props> = ( { className, productId, quantity, ...others } ) => {
  const { increase, decrease, getQuantity } = useCartStore();

  return (
    <form className={twMerge( 'flex', className )} {...others}>
      <button type="button" onClick={() => decrease( productId )} className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200 cursor-pointer">-</button>
      <p className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200">{getQuantity( productId )}</p>
      <button type="button" onClick={getQuantity( productId ) < quantity ? () => increase( productId ) : () => {}} className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200 cursor-pointer">+</button>
    </form>
  );
};

export default UpdateQuantityForm;