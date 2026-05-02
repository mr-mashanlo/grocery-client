import { type LoaderFunction } from 'react-router';

import { addressService } from '@/entities/address';
import { queryClient } from '@/shared/libs';

export const addressLoader: LoaderFunction = async () => {
  return await queryClient.ensureQueryData( {
    queryKey: [ 'address' ],
    queryFn: () => addressService.getMyAddress()
  } );
};