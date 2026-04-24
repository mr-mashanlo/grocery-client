import { Button } from '@headlessui/react';
import confetti from 'canvas-confetti';
import { type ButtonHTMLAttributes, type DetailedHTMLProps, type FC } from 'react';

import { type CreateCartDTO, useCartStore } from '@/entities/cart';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  product: CreateCartDTO
}

const AddToCartButton: FC<Props> = ( { product, ...props } ) => {
  const increase = useCartStore( state => state.increase );

  const handleButtonClick = () => {
    increase( product );
    confetti( {
      scalar: 2,
      spread: 180,
      particleCount: 60,
      origin: { y: -0.1 },
      startVelocity: -35
    } );
  };

  return (
    <Button onClick={handleButtonClick} {...props} />
  );
};

export default AddToCartButton;