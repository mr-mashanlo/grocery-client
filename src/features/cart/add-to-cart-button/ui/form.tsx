import { Button } from '@headlessui/react';
import { type ButtonHTMLAttributes, type DetailedHTMLProps, type FC } from 'react';

import { type CreateCartDTO, useCartStore } from '@/entities/cart';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  product: CreateCartDTO
}

const AddToCartButton: FC<Props> = ( { product, ...props } ) => {
  const increase = useCartStore( state => state.increase );

  return (
    <Button onClick={() => increase( product )} {...props} />
  );
};

export default AddToCartButton;