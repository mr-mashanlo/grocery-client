import { kyInstance } from '@/shared/libs';

import { type Category, type CreateCategoryDTO, type PaginatedCategory, type UpdateCategoryDTO } from '../model/schema';

class CategoryService {

  createCategory = ( data: CreateCategoryDTO ): Promise<Category> => {
    return kyInstance.post( 'categories', { json: data } ).json();
  };

  deleteCategory = ( id: string ): Promise<Category> => {
    return kyInstance.delete( `categories/${id}` ).json();
  };

  getCategories = async ( searchParams?: Record<string, string> ): Promise<PaginatedCategory> => {
    return kyInstance.get( 'categories', { searchParams } ).json();
  };

  updateCategory = async ( id: string, data: UpdateCategoryDTO ): Promise<Category> => {
    return kyInstance.put( `categories/${id}`, { json: data } ).json();
  };

}

export const categoryService = new CategoryService();