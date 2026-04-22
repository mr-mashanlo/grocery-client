import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addressService } from '../api/api';
import { type UpdateAddressDTO } from './schema';

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();

  const update = useMutation( {
    mutationFn: ( { id, data }: { id: string, data: UpdateAddressDTO } ) => addressService.updateAddress( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'addresses' ] } )
  } );

  return { update };
};