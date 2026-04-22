import { useMutation, useQueryClient } from '@tanstack/react-query';

import { orderService } from '../api/api';

export const useDeleteOrder = ( id: string ) => {
  const queryClient = useQueryClient();

  const remove = useMutation( {
    mutationFn: () => orderService.deleteOrder( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'orders' ] } )
  } );

  return { remove };
};