import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type Image, type UpdateImageDTO, useUpdateImage } from '@/entities/image';
import { mapServerErrors } from '@/shared/libs';

export const useUpdateImageForm = ( image: Image ) => {
  const close = useClose();
  const { update } = useUpdateImage();

  const form = useForm( {
    defaultValues: {
      alt: image.alt,
      path: image.path,
      url: image.url
    } as UpdateImageDTO,

    onSubmit: async ( { value, formApi } ) => {
      try {
        await update.mutateAsync( { id: image._id, data: value } );
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
