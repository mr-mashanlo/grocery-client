import { kyInstance } from '@/shared/libs';

import { type PaginatedProduct, type Product } from '../model/schema';

class ProductService {

  get = async ( id: string ): Promise<Product> => {
    const response = await kyInstance( `products/${id}`, { method: 'get' } );
    return await response.json();
  };

  getMany = async ( params?: Record<string, string> ): Promise<PaginatedProduct> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `products?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

}

export const productService = new ProductService();