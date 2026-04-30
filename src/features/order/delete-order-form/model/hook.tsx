import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useDeleteOrder } from '@/entities/order';
import { mapServerErrors } from '@/shared/libs';

export const useDeleteOrderForm = ( id: string ) => {
  const close = useClose();
  const { remove } = useDeleteOrder( id );

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
