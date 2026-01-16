import { useQuery } from '@tanstack/react-query';

import { productService } from '../api/api';
import { useFilterStore } from './store';

export const useProducts = ( params?: Record<string, string> ) => {

  const { category } = useFilterStore();

  const products = useQuery( {
    queryKey: [ 'products', category ],
    queryFn: () => productService.getAllProducts( params ),
    placeholderData: data => data
  } );

  return { products };

};