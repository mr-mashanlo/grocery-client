import { useQuery } from '@tanstack/react-query';

import { orderService } from '../api/api';

export const useMyOrders = ( params?: Record<string, string> ) => {

  const orders = useQuery( {
    queryKey: [ 'orders', 'my' ],
    queryFn: () => orderService.getMyOrders( params ),
    placeholderData: data => data
  } );

  return { orders };

};