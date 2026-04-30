import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useAuth } from '@/entities/auth';
import { mapServerErrors } from '@/shared/libs';

export const useSignInForm = ( { onSuccess, onError }: { onSuccess?: () => void, onError?: () => void } ) => {

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