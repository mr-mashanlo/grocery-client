import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { useDeleteCategory } from '@/entities/category';

export const useDeleteCategoryForm = ( id: string ) => {
  const close = useClose();
  const { remove } = useDeleteCategory( id );

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
