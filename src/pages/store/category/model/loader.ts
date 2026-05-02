import { type LoaderFunction } from 'react-router';

import { categoryService } from '@/entities/category';
import { queryClient } from '@/shared/libs';

export const categoriesLoader: LoaderFunction = async ( { request } ) => {
  const url = new URL( request.url );
  const searchParams = Object.fromEntries( url.searchParams.entries() );
  return await queryClient.ensureQueryData( {
    queryKey: [ 'categories', searchParams ],
    queryFn: () => categoryService.getCategories( { archived: 'false', ...searchParams } )
  } );
};