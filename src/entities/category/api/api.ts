import { kyInstance } from '@/shared/libs';

import { type Category, type CreateCategoryDTO, type PaginatedCategory, type UpdateCategoryDTO } from '../model/schema';

class CategoryService {

  createCategory = async ( data: CreateCategoryDTO ): Promise<Category> => {
    const response = await kyInstance( 'categories', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  deleteCategory = async ( id: string ): Promise<Category> => {
    const response = await kyInstance( `categories/${id}`, { method: 'delete' } );
    return await response.json();
  };

  getCategories = async ( params?: Record<string, string> ): Promise<PaginatedCategory> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `categories?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

  updateCategory = async ( id: string, data: UpdateCategoryDTO ): Promise<Category> => {
    const response = await kyInstance( `categories/${id}`, { method: 'put', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const categoryService = new CategoryService();