import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { useDeleteProduct } from '@/entities/product';

export const useDeleteProductForm = ( id: string ) => {
  const close = useClose();
  const { remove } = useDeleteProduct( id );

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
