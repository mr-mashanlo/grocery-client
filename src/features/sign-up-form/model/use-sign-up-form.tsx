import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useAuth } from '@/entities/auth';
import { mapServerErrors } from '@/shared/mappers';

interface Props {
  onSuccess?: () => void,
  onError?: () => void
}

export const useSignUpForm = ( { onSuccess, onError }: Props = {} ) => {

  const { signup } = useAuth();

  const form = useForm( {
    defaultValues: {
      nickname: '',
      password: ''
    },

    onSubmit: async ( { value, formApi } ) => {
      try {
        await signup( value );
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