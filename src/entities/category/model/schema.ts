import { z } from 'zod';

import { type PaginatedResponse } from '@/shared/types';

const ImageSchema = z.object( {
  _id: z.string(),
  url: z.string(),
  alt: z.string()
} );

export const CategorySchema = z.object( {
  _id: z.string(),
  name: z.string().min( 3, 'Name must be ≥ 3 characters' ),
  slug: z.string(),
  archived: z.boolean(),
  image: ImageSchema
} );

export const CreateCategorySchema = CategorySchema.pick( { name: true } ).extend( {
  image: z.string().min( 1, 'Image must be selected' )
} );

export const UpdateCategorySchema = CategorySchema.pick( { name: true, archived: true } ).extend( {
  image: z.string().min( 1, 'Image must be selected' )
} );

export type Category = z.infer<typeof CategorySchema>;

export type CreateCategoryDTO = z.infer<typeof CreateCategorySchema>;

export type UpdateCategoryDTO = z.infer<typeof UpdateCategorySchema>;

export type PaginatedCategory = PaginatedResponse<Category>
