import { orderService } from './api/api';
import { type CreateOrderDTO, CreateOrderSchema, type Order, type UpdateOrderDTO } from './model/schema';
import { useCreateOrder } from './model/use-create-order';
import { useDeleteOrder } from './model/use-delete-order';
import { useMyOrders } from './model/use-my-orders';
import { useOrder } from './model/use-order';
import { useOrders } from './model/use-orders';
import { useUpdateOrder } from './model/use-update-order';

export { type CreateOrderDTO, CreateOrderSchema, type Order, type UpdateOrderDTO };

export { orderService, useCreateOrder, useDeleteOrder, useMyOrders, useOrder, useOrders, useUpdateOrder };
