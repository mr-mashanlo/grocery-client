import { z } from 'zod';

import { type PaginatedResponse } from '@/shared/types';

export const ImageSchema = z.object( {
  _id: z.string(),
  alt: z.string().min( 3 ),
  path: z.string(),
  url: z.string()
} );

export const CreateImageSchema = ImageSchema.pick( { alt: true } ).extend( {
  image: z.instanceof( File )
} );

export const UpdateImageSchema = ImageSchema.omit( { _id: true } );

export type Image = z.infer<typeof ImageSchema>;

export type CreateImageDTO = z.infer<typeof CreateImageSchema>;

export type UpdateImageDTO = z.infer<typeof UpdateImageSchema>;

export type PaginatedImage = PaginatedResponse<Image>
