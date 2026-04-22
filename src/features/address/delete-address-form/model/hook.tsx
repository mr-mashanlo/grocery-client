import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { useDeleteAddress } from '@/entities/address';

export const useDeleteAddressForm = ( id: string ) => {
  const close = useClose();
  const { remove } = useDeleteAddress( id );

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
