import { useMutation, useQueryClient } from '@tanstack/react-query';

import { categoryService } from '../api/api';
import { type CreateCategoryDTO } from './schema';

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  const create = useMutation( {
    mutationFn: ( data: CreateCategoryDTO ) => categoryService.createCategory( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'categories' ] } )
  } );

  return { create };
};