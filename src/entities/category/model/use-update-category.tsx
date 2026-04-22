import { useMutation, useQueryClient } from '@tanstack/react-query';

import { categoryService } from '../api/api';
import { type UpdateCategoryDTO } from './schema';

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  const update = useMutation( {
    mutationFn: ( { id, data }: { id: string, data: UpdateCategoryDTO } ) => categoryService.updateCategory( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'categories' ] } )
  } );

  return { update };
};