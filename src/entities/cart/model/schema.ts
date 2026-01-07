import z from 'zod';

export const CartSchema = z.object( {
  product: z.string(),
  quantity: z.number()
} );

export type Cart = z.infer<typeof CartSchema>;