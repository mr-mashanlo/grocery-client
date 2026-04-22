import { z } from 'zod';

import { type PaginatedResponse } from '@/shared/types';

const ProductSchema = z.object( {
  _id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  image: z.object( {
    alt: z.string(),
    url: z.string()
  } )
} );

export const OrderSchema = z.object( {
  _id: z.string(),
  user: z.string(),
  address: z.string(),
  status: z.enum( [ 'Processing', 'Shipped', 'Delivered', 'Canceled' ] ),
  createdAt: z.string(),
  products: z.array( ProductSchema ),
  total: z.number(),
  quantity: z.number()
} );

export const CreateOrderSchema = OrderSchema.pick( { products: true, total: true, quantity: true } );

export const UpdateOrderSchema = OrderSchema.pick( { products: true, total: true, quantity: true } );

export type Order = z.infer<typeof OrderSchema>;

export type CreateOrderDTO = z.infer<typeof CreateOrderSchema>;

export type UpdateOrderDTO = z.infer<typeof CreateOrderSchema>;

export type PaginatedOrder = PaginatedResponse<Order>