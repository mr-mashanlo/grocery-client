import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addressService } from '../api/api';

export const useDeleteAddress = ( id: string ) => {
  const queryClient = useQueryClient();

  const remove = useMutation( {
    mutationFn: () => addressService.deleteAddress( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'addresses' ] } )
  } );

  return { remove };
};