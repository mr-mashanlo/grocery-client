import { useMutation, useQueryClient } from '@tanstack/react-query';

import { imageService } from '../api/api';
import { type UpdateImageDTO } from './schema';

export const useUpdateImage = () => {
  const queryClient = useQueryClient();

  const update = useMutation( {
    mutationFn: ( { id, data }: { id: string, data: UpdateImageDTO } ) => imageService.updateImage( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'images' ] } )
  } );

  return { update };
};
