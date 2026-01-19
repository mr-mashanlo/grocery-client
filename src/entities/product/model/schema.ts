import { z } from 'zod';

export const ProductSchema = z.object( {
  _id: z.string(),
  image: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number(),
  unit: z.enum( [ 'pc', 'kg' ] ),
  archived: z.boolean(),
  category: z.object( {
    title: z.string(),
    slug: z.string()
  } ),
  quantity: z.number().optional()
} );

export type Product = z.infer<typeof ProductSchema>;