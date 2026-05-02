import { type LoaderFunction } from 'react-router';

import { imageService } from '@/entities/image';
import { queryClient } from '@/shared/libs';

export const imagesLoader: LoaderFunction = async ( { request } ) => {
  const url = new URL( request.url );
  const searchParams = Object.fromEntries( url.searchParams.entries() );
  return await queryClient.ensureQueryData( {
    queryKey: [ 'images', searchParams ],
    queryFn: () => imageService.getImages( searchParams )
  } );
};