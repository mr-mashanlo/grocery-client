import { kyInstance } from '@/shared/libs';

import { type Order, type OrderDTO, type PaginatedOrders } from '../model/schema';

class OrderService {

  createOrder = async ( data: OrderDTO ): Promise<Order> => {
    const response = await kyInstance( 'orders', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  getAllOrders = async ( params?: Record<string, string> ): Promise<PaginatedOrders> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `orders/all?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

  getMyOrders = async ( params?: Record<string, string> ): Promise<PaginatedOrders> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `orders?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

  getOrderById = async ( id: string ): Promise<Order> => {
    const response = await kyInstance( `orders/${id}`, { method: 'get' } );
    return await response.json();
  };

  updateOrderStatus = async ( id: string, status: 'Processing' | 'Shipped' | 'Delivered' | 'Canceled' ): Promise<Order> => {
    const response = await kyInstance( `orders/${id}`, { method: 'put', body: JSON.stringify( { status } ) } );
    return await response.json();
  };

}

export const orderService = new OrderService();