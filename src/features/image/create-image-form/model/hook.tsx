import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type CreateImageDTO, useCreateImage } from '@/entities/image';
import { mapServerErrors } from '@/shared/libs';

export const useCreateImageForm = () => {
  const close = useClose();
  const { create } = useCreateImage();

  const form = useForm( {
    defaultValues: {
      alt: ''
    } as CreateImageDTO,

    onSubmit: async ( { value, formApi } ) => {
      try {
        await create.mutateAsync( value );
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