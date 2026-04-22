import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { type CreateImageDTO, useCreateImage } from '@/entities/image';

export const useCreateImageForm = () => {
  const close = useClose();
  const { create } = useCreateImage();

  const form = useForm( {
    defaultValues: {
      alt: ''
    } as CreateImageDTO,

    onSubmit: async ( { value } ) => {
      try {
        await create.mutateAsync( value );
        form.reset();
        close();
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return form;
};