import { kyInstance } from '@/shared/libs';

import { type PaginatedCategory } from '../model/schema';

class CategoryService {

  getAllCategories = async ( params?: Record<string, string> ): Promise<PaginatedCategory> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `categories?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

}

export const categoryService = new CategoryService();