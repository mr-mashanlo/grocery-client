import { useMutation, useQueryClient } from '@tanstack/react-query';

import { categoryService } from '../api/api';

export const useDeleteCategory = ( id: string ) => {
  const queryClient = useQueryClient();

  const remove = useMutation( {
    mutationFn: () => categoryService.deleteCategory( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'categories' ] } )
  } );

  return { remove };
};