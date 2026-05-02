import { type LoaderFunction } from 'react-router';

import { orderService } from '@/entities/order';
import { queryClient } from '@/shared/libs';

export const ordersLoader: LoaderFunction = async ( { request } ) => {
  const url = new URL( request.url );
  const searchParams = Object.fromEntries( url.searchParams.entries() );
  return await queryClient.ensureQueryData( {
    queryKey: [ 'orders', searchParams ],
    queryFn: () => orderService.getMyOrders( searchParams )
  } );
};