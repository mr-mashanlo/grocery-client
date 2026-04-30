import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type CreateAddressDTO, useCreateAddress } from '@/entities/address';
import { mapServerErrors } from '@/shared/libs';

export const useCreateAddressForm = ( { onSuccess, onError }: { onSuccess?: () => void, onError?: () => void } ) => {
  const close = useClose();
  const { create } = useCreateAddress();

  const form = useForm( {
    defaultValues: {
      city: '',
      address: '',
      phone: ''
    } as CreateAddressDTO,

    onSubmit: async ( { value, formApi } ) => {
      try {
        await create.mutateAsync( value );
        form.reset();
        close();
        onSuccess?.();
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          const errors = await error.response.json();
          formApi.setErrorMap( { onChange: { fields: mapServerErrors( errors.errors ) } } );
        }
        onError?.();
      }
    }
  } );

  return form;
};