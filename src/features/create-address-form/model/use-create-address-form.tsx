import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useAddress, useCreateAddress, useUpgradeAddress } from '@/entities/address';
import { mapServerErrors } from '@/shared/libs';

export const useCreateAddressForm = () => {

  const { address } = useAddress();
  const { create } = useCreateAddress();
  const { upgrade } = useUpgradeAddress( address.data?._id || '' );

  const form = useForm( {
    defaultValues: {
      region: '',
      city: '',
      street: '',
      address: '',
      phone: '',
      ...address.data
    },

    onSubmit: async ( { value, formApi } ) => {
      try {
        if ( address.data ) {
          await upgrade.mutateAsync( value );
        } else {
          await create.mutateAsync( value );
        }
        form.reset();
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