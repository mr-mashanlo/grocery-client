import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useOrder, useUpdateOrderStatus } from '@/entities/order';
import { mapServerErrors } from '@/shared/libs';

export const useUpdateOrderForm = ( id: string ) => {

  const { order } = useOrder( id );
  const { update } = useUpdateOrderStatus( id );

  const form = useForm( {
    defaultValues: {
      status: order.data?.status as 'Processing' | 'Shipped' | 'Delivered' | 'Canceled'
    },

    onSubmit: async ( { value, formApi } ) => {
      try {
        await update.mutateAsync( value.status );
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