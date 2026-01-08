import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useAddress, useUpgradeAddress } from '@/entities/address';
import { mapServerErrors } from '@/shared/mappers';

export const useAddressForm = () => {

  const { address } = useAddress();
  const { upgrade } = useUpgradeAddress();

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
        await upgrade.mutateAsync( value );
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          const errors = await error.response.json();
          formApi.setErrorMap( { onChange: { fields: mapServerErrors( errors.issues ) } } );
        }
      }
    }
  } );

  return form;

};