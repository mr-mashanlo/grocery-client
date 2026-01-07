import { z } from 'zod';

import type { PaginatedResponse } from '@/shared/types';

export const ProductSchema = z.object( {
  _id: z.string(),
  image: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  archived: z.boolean(),
  category: z.object( {
    title: z.string(),
    slug: z.string()
  } ),
  quantity: z.object( {
    quantity: z.number()
  } ).optional()
} );

export type Product = z.infer<typeof ProductSchema>;

export type PaginatedProduct = PaginatedResponse<Product>;