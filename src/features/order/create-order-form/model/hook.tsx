import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';
import { useNavigate } from 'react-router';

import { type Cart, useCartStore } from '@/entities/cart';
import { type CreateOrderDTO, useCreateOrder } from '@/entities/order';
import { mapServerErrors } from '@/shared/libs';

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

    onSubmit: async ( { value, formApi } ) => {
      try {
        await create.mutateAsync( value );
        form.reset();
        close();
        reset();
        navigate( '/orders', { replace: true } );
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          const errors = await error.response.json();
          formApi.setErrorMap( { onChange: { fields: mapServerErrors( errors.errors ) } } );
        }
      }
    }
  } );

  return form;
};