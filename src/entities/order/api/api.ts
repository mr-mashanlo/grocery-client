import { kyInstance } from '@/shared/libs';

import { type Order, type OrderDTO } from '../model/schema';

class OrderService {

  createOrder = async ( data: OrderDTO ): Promise<Order> => {
    const response = await kyInstance( 'orders', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  getOrderById = async ( id: string ): Promise<Order> => {
    const response = await kyInstance( `orders/${id}`, { method: 'get' } );
    return await response.json();
  };

  getAllOrders = async ( params?: Record<string, string> ): Promise<Array<Order>> => {
    const response = await kyInstance( `orders?${params}`, { method: 'get' } );
    return await response.json();
  };

}

export const orderService = new OrderService();