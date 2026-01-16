import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addressService } from '../api/api';
import type { AddressDTO } from './schema';

export const useCreateAddress = () => {

  const queryClient = useQueryClient();

  const create = useMutation( {
    mutationFn: ( data: AddressDTO ) => addressService.createAddress( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'address' ] } )
  } );

  return { create };

};