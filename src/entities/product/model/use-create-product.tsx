import { useMutation, useQueryClient } from '@tanstack/react-query';

import { productService } from '../api/api';
import { type CreateProductDTO } from './schema';

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const create = useMutation( {
    mutationFn: ( data: CreateProductDTO ) => productService.createProduct( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'products' ] } )
  } );

  return { create };
};