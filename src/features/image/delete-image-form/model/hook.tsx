import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { useDeleteImage } from '@/entities/image';

export const useDeleteImageForm = ( id: string ) => {
  const close = useClose();
  const { remove } = useDeleteImage( id );

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
