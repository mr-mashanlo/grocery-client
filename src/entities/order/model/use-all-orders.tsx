import { useQuery } from '@tanstack/react-query';

import { orderService } from '../api/api';

export const useAllOrders = ( params?: Record<string, string> ) => {

  const orders = useQuery( {
    queryKey: [ 'orders', 'all' ],
    queryFn: () => orderService.getAllOrders( params ),
    placeholderData: data => data
  } );

  return { orders };

};