import { useMutation, useQueryClient } from '@tanstack/react-query';

import { imageService } from '../api/api';
import { type CreateImageDTO } from './schema';

export const useCreateImage = () => {
  const queryClient = useQueryClient();

  const create = useMutation( {
    mutationFn: ( data: CreateImageDTO ) => imageService.createImage( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'images' ] } )
  } );

  return { create };
};