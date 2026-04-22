import z from 'zod';

export const CartSchema = z.object( {
  _id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  image: z.object( {
    alt: z.string(),
    url: z.string()
  } )
} );

export const CreateCartSchema = CartSchema.omit( { quantity: true } );

export type Cart = z.infer<typeof CartSchema>;

export type CreateCartDTO = z.infer<typeof CreateCartSchema>;