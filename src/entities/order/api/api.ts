import { kyInstance } from '@/shared/libs';

import { type Order, type OrderDTO, type PaginatedOrder } from '../model/schema';

class OrderService {

  get = async ( id: string ): Promise<Order> => {
    const response = await kyInstance( `orders/${id}`, { method: 'get' } );
    return await response.json();
  };

  getMany = async ( params?: Record<string, string> ): Promise<PaginatedOrder> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `orders?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

  create = async ( data: OrderDTO ): Promise<Order> => {
    const response = await kyInstance( 'orders', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const orderService = new OrderService();