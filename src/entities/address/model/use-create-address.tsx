import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addressService } from '../api/api';
import { type CreateAddressDTO } from './schema';

export const useCreateAddress = () => {
  const queryClient = useQueryClient();

  const create = useMutation( {
    mutationFn: ( data: CreateAddressDTO ) => addressService.createAddress( data ),
    onSuccess: address => {
      queryClient.setQueryData( [ 'address' ], address );
      queryClient.invalidateQueries( { queryKey: [ 'addresses', 'address' ] } );
    }
  } );

  return { create };
};