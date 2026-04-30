import { z } from 'zod';

import { type PaginatedResponse } from '@/shared/types';

const ImageSchema = z.object( {
  _id: z.string(),
  url: z.string(),
  alt: z.string()
} );

const CategorySchema = z.object( {
  _id: z.string(),
  name: z.string(),
  slug: z.string()
} );

export const ProductSchema = z.object( {
  _id: z.string(),
  name: z.string().min( 3, 'Name must be ≥ 3 characters' ),
  slug: z.string(),
  description: z.string().optional(),
  price: z.number().min( 1, 'Price must be ≥ 1' ),
  salePrice: z.number().optional(),
  archived: z.boolean(),
  images: z.array( ImageSchema ),
  categories: z.array( CategorySchema )
} );

export const CreateProductSchema = ProductSchema.omit( { _id: true, slug: true, images: true, categories: true, archived: true } ).extend( {
  images: z.array( z.string() ).min( 1, 'Image must be selected' ),
  categories: z.array( CategorySchema.omit( { _id: true } ) ).min( 1, 'Category must be selected' )
} );

export const UpdateProductSchema = ProductSchema.omit( { _id: true, slug: true, images: true, categories: true, archived: true } ).extend( {
  images: z.array( z.string() ).min( 1, 'Image must be selected' ),
  categories: z.array( CategorySchema ).min( 1, 'Category must be selected' )
} );

export type Product = z.infer<typeof ProductSchema>;

export type CreateProductDTO = z.infer<typeof CreateProductSchema>;

export type UpdateProductDTO = z.infer<typeof UpdateProductSchema>;

export type PaginatedProduct = PaginatedResponse<Product>