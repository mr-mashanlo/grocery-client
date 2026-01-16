import { kyInstance } from '@/shared/libs';

import { type Product } from '../model/schema';

class ProductService {

  getProductById = async ( id: string ): Promise<Product> => {
    const response = await kyInstance( `products/${id}`, { method: 'get' } );
    return await response.json();
  };

  getAllProducts = async ( params?: Record<string, string> ): Promise<Array<Product>> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `products?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

}

export const productService = new ProductService();