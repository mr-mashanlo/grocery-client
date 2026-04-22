import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { type CreateAddressDTO, useCreateAddress } from '@/entities/address';

interface Props {
  onSuccess?: () => void,
  onError?: () => void
}

export const useCreateAddressForm = ( { onSuccess, onError }: Props = {} ) => {
  const close = useClose();
  const { create } = useCreateAddress();

  const form = useForm( {
    defaultValues: {
      city: '',
      address: '',
      phone: ''
    } as CreateAddressDTO,

    onSubmit: async ( { value } ) => {
      try {
        await create.mutateAsync( value );
        form.reset();
        close();
        onSuccess?.();
      } catch ( error ) {
        console.log( error );
        onError?.();
      }
    }
  } );

  return form;
};