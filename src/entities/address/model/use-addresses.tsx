import { useQuery } from '@tanstack/react-query';

import { addressService } from '../api/api';

export const useAddresses = ( params?: Record<string, string> ) => {

  const addresses = useQuery( {
    queryKey: [ 'addresses', params ],
    queryFn: () => addressService.getAddresses( params ),
    placeholderData: data => data
  } );

  return { addresses };

};