import { useMutation, useQueryClient } from '@tanstack/react-query';

import { orderService } from '../api/api';

export const useUpdateOrderStatus = ( id: string ) => {

  const queryClient = useQueryClient();

  const update = useMutation( {
    mutationFn: ( status: 'Processing' | 'Shipped' | 'Delivered' | 'Canceled' ) => orderService.updateOrderStatus( id, status ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'order', id ] } )
  } );

  return { update };
};