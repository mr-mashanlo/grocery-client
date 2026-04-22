import { useMutation, useQueryClient } from '@tanstack/react-query';

import { orderService } from '../api/api';
import { type UpdateOrderDTO } from './schema';

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  const update = useMutation( {
    mutationFn: ( { id, data }: { id: string, data: UpdateOrderDTO } ) => orderService.updateOrder( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'orders' ] } )
  } );

  return { update };
};