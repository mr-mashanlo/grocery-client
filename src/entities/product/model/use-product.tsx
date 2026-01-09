import { useQuery } from '@tanstack/react-query';

import { productService } from '../api/api';

export const useProduct = ( id: string ) => {

  const product = useQuery( {
    queryKey: [ 'product', id ],
    queryFn: () => productService.get( id ),
    placeholderData: data => data
  } );

  return { product };

};