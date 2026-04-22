import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { type Image, type UpdateImageDTO, useUpdateImage } from '@/entities/image';

export const useUpdateImageForm = ( image: Image ) => {
  const close = useClose();
  const { update } = useUpdateImage();

  const form = useForm( {
    defaultValues: {
      alt: image.alt,
      path: image.path,
      url: image.url
    } as UpdateImageDTO,

    onSubmit: async ( { value } ) => {
      try {
        await update.mutateAsync( { id: image._id, data: value } );
        form.reset();
        close();
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return form;
};
