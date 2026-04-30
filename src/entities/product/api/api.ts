import { kyInstance } from '@/shared/libs';

import { type CreateProductDTO, type PaginatedProduct, type Product, type UpdateProductDTO } from '../model/schema';

class ProductService {

  createProduct = ( data: CreateProductDTO ): Promise<Product> => {
    return kyInstance.post( 'products', { json: data } ).json();
  };

  deleteProduct = ( id: string ): Promise<Product> => {
    return kyInstance.delete( `products/${id}` ).json();
  };

  getProducts = ( searchParams?: Record<string, string> ): Promise<PaginatedProduct> => {
    return kyInstance.get( 'products', { searchParams } ).json();
  };

  getProductSlug = ( slug: string ): Promise<Product> => {
    return kyInstance.get( `products/${slug}` ).json();
  };

  updateProduct = ( id: string, data: UpdateProductDTO ): Promise<Product> => {
    return kyInstance.put( `products/${id}`, { json: data } ).json();
  };

}

export const productService = new ProductService();
