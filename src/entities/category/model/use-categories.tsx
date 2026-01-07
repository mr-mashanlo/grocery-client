import { useQuery } from '@tanstack/react-query';

import { categoryService } from '../api/api';

const useCategories = ( params?: Record<string, string> ) => {

  const categories = useQuery( {
    queryKey: [ 'categories' ],
    queryFn: () => categoryService.getMany( params ),
    placeholderData: data => data
  } );

  return { categories };

};

export default useCategories;