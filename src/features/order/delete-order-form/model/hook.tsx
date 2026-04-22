import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { useDeleteOrder } from '@/entities/order';

export const useDeleteOrderForm = ( id: string ) => {
  const close = useClose();
  const { remove } = useDeleteOrder( id );

  const form = useForm( {
    onSubmit: async () => {
      try {
        await remove.mutateAsync();
        form.reset();
        close();
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return form;
};
