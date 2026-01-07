import { useQuery } from '@tanstack/react-query';

import { productService } from '../api/api';

const useProducts = ( params?: Record<string, string> ) => {

  const products = useQuery( {
    queryKey: [ 'products' ],
    queryFn: () => productService.getMany( params ),
    placeholderData: data => data
  } );

  return { products };

};

export default useProducts;