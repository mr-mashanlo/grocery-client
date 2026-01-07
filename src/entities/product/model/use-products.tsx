import { useQuery } from '@tanstack/react-query';

import { productService } from '../api/api';
import { useFilterStore } from './store';

const useProducts = ( params?: Record<string, string> ) => {

  const { category } = useFilterStore();

  const products = useQuery( {
    queryKey: [ 'products', category ],
    queryFn: () => productService.getMany( params ),
    placeholderData: data => data
  } );

  return { products };

};

export default useProducts;