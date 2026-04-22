import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from 'react-router';

import { type Cart, useCartStore } from '@/entities/cart';
import { type CreateOrderDTO, useCreateOrder } from '@/entities/order';

export const useCreateOrderForm = ( products: Array<Cart>, total: number, quantity: number ) => {
  const navigate = useNavigate();
  const reset = useCartStore( state => state.reset );
  const close = useClose();
  const { create } = useCreateOrder();

  const form = useForm( {
    defaultValues: {
      products,
      total,
      quantity
    } as CreateOrderDTO,

    onSubmit: async ( { value } ) => {
      try {
        await create.mutateAsync( value );
        form.reset();
        close();
        reset();
        navigate( '/orders', { replace: true } );
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return form;
};