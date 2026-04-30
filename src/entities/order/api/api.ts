import { kyInstance } from '@/shared/libs';

import { type CreateOrderDTO, type Order, type PaginatedOrder } from '../model/schema';

class OrderService {

  createOrder = ( data: CreateOrderDTO ): Promise<Order> => {
    return kyInstance.post( 'orders', { json: data } ).json();
  };

  deleteOrder = ( id: string ): Promise<Order> => {
    return kyInstance.delete( `orders/${id}` ).json();
  };

  getOrders = ( searchParams?: Record<string, string> ): Promise<PaginatedOrder> => {
    return kyInstance.get( 'orders', { searchParams } ).json();
  };

  getMyOrders = async ( searchParams?: Record<string, string> ): Promise<PaginatedOrder> => {
    return kyInstance.get( 'orders/me', { searchParams } ).json();
  };

  getOrderById = async ( id: string ): Promise<Order> => {
    return kyInstance.get( `orders/${id}` ).json();
  };

  updateOrder = async ( id: string, data: CreateOrderDTO ): Promise<Order> => {
    return kyInstance.put( `orders/${id}`, { json: data } ).json();
  };

}

export const orderService = new OrderService();