import { useQuery } from '@tanstack/react-query';

import { authService } from '../api/api';

export const useMe = () => {

  const me = useQuery( {
    queryKey: [ 'me' ],
    queryFn: () => authService.me(),
    retry: false
  } );

  return { me };
};