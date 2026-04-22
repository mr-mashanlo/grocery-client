import { kyInstance } from '@/shared/libs';

import { type CreateOrderDTO, type Order, type PaginatedOrder } from '../model/schema';

class OrderService {

  createOrder = async ( data: CreateOrderDTO ): Promise<Order> => {
    const response = await kyInstance( 'orders', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  deleteOrder = async ( id: string ): Promise<Order> => {
    const response = await kyInstance( `orders/${id}`, { method: 'delete' } );
    return await response.json();
  };

  getOrders = async ( params?: Record<string, string> ): Promise<PaginatedOrder> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `orders?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

  getMyOrders = async ( params?: Record<string, string> ): Promise<PaginatedOrder> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `orders/me?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

  getOrderById = async ( id: string ): Promise<Order> => {
    const response = await kyInstance( `orders/${id}`, { method: 'get' } );
    return await response.json();
  };

  updateOrder = async ( id: string, data: CreateOrderDTO ): Promise<Order> => {
    const response = await kyInstance( `orders/${id}`, { method: 'put', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const orderService = new OrderService();