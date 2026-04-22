import { useQuery } from '@tanstack/react-query';

import { addressService } from '../api/api';

export const useMyAddress = () => {
  const address = useQuery( {
    queryKey: [ 'address', 'me' ],
    queryFn: () => addressService.getMyAddress(),
    placeholderData: data => data
  } );

  return { address };
};