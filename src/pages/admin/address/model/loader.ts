import { type LoaderFunction } from 'react-router';

import { addressService } from '@/entities/address';
import { queryClient } from '@/shared/libs';

export const addressesLoader: LoaderFunction = async ( { request } ) => {
  const url = new URL( request.url );
  const searchParams = Object.fromEntries( url.searchParams.entries() );
  return await queryClient.ensureQueryData( {
    queryKey: [ 'addresses', searchParams ],
    queryFn: () => addressService.getAddresses( searchParams )
  } );
};