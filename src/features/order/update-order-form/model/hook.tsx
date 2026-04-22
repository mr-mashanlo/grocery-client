import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { type Order, type UpdateOrderDTO, useUpdateOrder } from '@/entities/order';

export const useUpdateOrderForm = ( order: Order ) => {
  const close = useClose();
  const { update } = useUpdateOrder();

  const form = useForm( {
    defaultValues: {
      total: order.total,
      products: order.products
    } as UpdateOrderDTO,

    onSubmit: async ( { value } ) => {
      try {
        await update.mutateAsync( { id: order._id, data: value } );
        form.reset();
        close();
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return form;
};
