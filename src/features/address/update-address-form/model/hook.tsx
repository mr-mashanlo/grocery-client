import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { type Address, type UpdateAddressDTO, useUpdateAddress } from '@/entities/address';

export const useUpdateAddressForm = ( address: Address ) => {
  const close = useClose();
  const { update } = useUpdateAddress();

  const form = useForm( {
    defaultValues: {
      city: address.city,
      address: address.address,
      phone: address.phone
    } as UpdateAddressDTO,

    onSubmit: async ( { value } ) => {
      try {
        await update.mutateAsync( { id: address._id, data: value } );
        form.reset();
        close();
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return form;
};
