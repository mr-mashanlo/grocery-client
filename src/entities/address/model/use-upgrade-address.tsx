import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addressService } from '../api/api';
import type { AddressDTO } from './schema';

export const useUpgradeAddress = () => {

  const queryClient = useQueryClient();

  const upgrade = useMutation( {
    mutationFn: ( data: AddressDTO ) => addressService.upgrade( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'address' ] } )
  } );

  return { upgrade };

};