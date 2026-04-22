import { useQuery } from '@tanstack/react-query';

import { imageService } from '../api/api';

export const useImages = ( params?: Record<string, string> ) => {

  const images = useQuery( {
    queryKey: [ 'images', params ],
    queryFn: () => imageService.getImages( params ),
    placeholderData: data => data
  } );

  return { images };
};
