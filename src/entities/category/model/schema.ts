import { z } from 'zod';

export const CategorySchema = z.object( {
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
  archived: z.string()
} );

export type Category = z.infer<typeof CategorySchema>;