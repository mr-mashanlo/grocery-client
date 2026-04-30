import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type Address, type UpdateAddressDTO, useUpdateAddress } from '@/entities/address';
import { mapServerErrors } from '@/shared/libs';

export const useUpdateAddressForm = ( address: Address ) => {
  const close = useClose();
  const { update } = useUpdateAddress();

  const form = useForm( {
    defaultValues: {
      city: address.city,
      address: address.address,
      phone: address.phone
    } as UpdateAddressDTO,

    onSubmit: async ( { value, formApi } ) => {
      try {
        await update.mutateAsync( { id: address._id, data: value } );
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
