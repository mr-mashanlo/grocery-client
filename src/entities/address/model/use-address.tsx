import { useQuery } from '@tanstack/react-query';

import { addressService } from '../api/api';

export const useAddress = () => {

  const address = useQuery( {
    queryKey: [ 'address' ],
    queryFn: () => addressService.get(),
    placeholderData: data => data
  } );

  return { address };

};