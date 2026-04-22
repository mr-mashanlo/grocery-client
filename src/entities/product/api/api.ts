import { kyInstance } from '@/shared/libs';

import { type CreateProductDTO, type PaginatedProduct, type Product, type UpdateProductDTO } from '../model/schema';

class ProductService {

  createProduct = async ( data: CreateProductDTO ): Promise<Product> => {
    const response = await kyInstance( 'products', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  deleteProduct = async ( id: string ): Promise<Product> => {
    const response = await kyInstance( `products/${id}`, { method: 'delete' } );
    return await response.json();
  };

  getProducts = async ( params?: Record<string, string> ): Promise<PaginatedProduct> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `products?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

  getProductById = async ( id: string ): Promise<Product> => {
    const response = await kyInstance( `products/${id}`, { method: 'get' } );
    return await response.json();
  };

  updateProduct = async ( id: string, data: UpdateProductDTO ): Promise<Product> => {
    const response = await kyInstance( `products/${id}`, { method: 'put', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const productService = new ProductService();
