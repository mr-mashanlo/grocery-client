import { useMutation, useQueryClient } from '@tanstack/react-query';

import { imageService } from '../api/api';

export const useDeleteImage = ( id: string ) => {
  const queryClient = useQueryClient();

  const remove = useMutation( {
    mutationFn: () => imageService.deleteImage( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'images' ] } )
  } );

  return { remove };
};