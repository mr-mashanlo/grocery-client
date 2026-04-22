import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useAuth } from '@/entities/auth';
import { mapServerErrors } from '@/shared/libs';

interface Props {
  onSuccess?: () => void,
  onError?: () => void
}

export const useSignInForm = ( { onSuccess, onError }: Props = {} ) => {

  const { signin } = useAuth();

  const form = useForm( {
    defaultValues: {
      nickname: 'nickname',
      password: 'nickname'
    },

    onSubmit: async ( { value, formApi } ) => {
      try {
        await signin( value );
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