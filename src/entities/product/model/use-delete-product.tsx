import { useMutation, useQueryClient } from '@tanstack/react-query';

import { productService } from '../api/api';

export const useDeleteProduct = ( id: string ) => {
  const queryClient = useQueryClient();

  const remove = useMutation( {
    mutationFn: () => productService.deleteProduct( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'products' ] } )
  } );

  return { remove };
};