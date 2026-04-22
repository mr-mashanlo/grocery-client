import { useMutation, useQueryClient } from '@tanstack/react-query';

import { productService } from '../api/api';
import { type UpdateProductDTO } from './schema';

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const update = useMutation( {
    mutationFn: ( { id, data }: { id: string, data: UpdateProductDTO } ) => productService.updateProduct( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'product' ] } )
  } );

  return { update };
};