import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type Order, type UpdateOrderDTO, useUpdateOrder } from '@/entities/order';
import { mapServerErrors } from '@/shared/libs';

export const useUpdateOrderForm = ( order: Order ) => {
  const close = useClose();
  const { update } = useUpdateOrder();

  const form = useForm( {
    defaultValues: {
      total: order.total,
      products: order.products
    } as UpdateOrderDTO,

    onSubmit: async ( { value, formApi } ) => {
      try {
        await update.mutateAsync( { id: order._id, data: value } );
        form.reset();
        close();
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
