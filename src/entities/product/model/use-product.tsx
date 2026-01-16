import { useQuery } from '@tanstack/react-query';

import { productService } from '../api/api';

export const useProduct = ( id: string ) => {

  const product = useQuery( {
    queryKey: [ 'product', id ],
    queryFn: () => productService.getProductById( id ),
    placeholderData: data => data
  } );

  return { product };

};