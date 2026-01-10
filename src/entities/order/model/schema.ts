import { z } from 'zod';

import type { PaginatedResponse } from '@/shared/types';

export const OrderDTOSchema = z.object( {
  address: z.string(),
  products: z.array( z.object( { _id: z.string(), price: z.number(), quantity: z.number() } ) ),
  totalPrice: z.number(),
  totalQuantity: z.number()
} );

export const OrderSchema = z.object( {
  _id: z.string(),
  user: z.string(),
  address: z.string(),
  products: z.array( z.object( { _id: z.string(), price: z.number(), quantity: z.number() } ) ),
  status: z.enum( [ 'Processing', 'Shipped', 'Delivered', 'Canceled' ] ),
  totalPrice: z.number(),
  totalQuantity: z.number(),
  createdAt: z.string()
} );

export type Order = z.infer<typeof OrderSchema>;

export type OrderDTO = z.infer<typeof OrderDTOSchema>;

export type PaginatedOrder = PaginatedResponse<Order>;