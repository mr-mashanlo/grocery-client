import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useDeleteImage } from '@/entities/image';
import { mapServerErrors } from '@/shared/libs';

export const useDeleteImageForm = ( id: string ) => {
  const close = useClose();
  const { remove } = useDeleteImage( id );

  const form = useForm( {
    onSubmit: async ( { formApi } ) => {
      try {
        await remove.mutateAsync();
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
