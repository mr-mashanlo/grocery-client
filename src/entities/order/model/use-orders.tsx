import { useQuery } from '@tanstack/react-query';

import { orderService } from '../api/api';

export const useOrders = ( params?: Record<string, string> ) => {

  const orders = useQuery( {
    queryKey: [ 'orders' ],
    queryFn: () => orderService.getMany( params ),
    placeholderData: data => data
  } );

  return { orders };

};