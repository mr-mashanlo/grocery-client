import { useMutation, useQueryClient } from '@tanstack/react-query';

import { orderService } from '../api/api';
import type { OrderDTO } from './schema';

export const useCreateOrder = () => {

  const queryClient = useQueryClient();

  const create = useMutation( {
    mutationFn: ( data: OrderDTO ) => orderService.create( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'order' ] } )
  } );

  return { create };
};