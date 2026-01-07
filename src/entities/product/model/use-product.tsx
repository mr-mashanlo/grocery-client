import { useMutation, useQueryClient } from '@tanstack/react-query';

import { productService } from '../api/api';

const useProduct = () => {

  const queryClient = useQueryClient();

  const product = useMutation( {
    mutationFn: ( id: string ) => productService.get( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'product' ] } )
  } );

  return { product };

};

export default useProduct;