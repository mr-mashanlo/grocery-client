import { z } from 'zod';

import type { PaginatedResponse } from '@/shared/types';

export const CategorySchema = z.object( {
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
  archived: z.string()
} );

export type Category = z.infer<typeof CategorySchema>;

export type PaginatedCategory = PaginatedResponse<Category>;