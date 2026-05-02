import { productService } from './api/api';
import { type CreateProductDTO, CreateProductSchema, type PaginatedProduct, type Product, type UpdateProductDTO, UpdateProductSchema } from './model/schema';
import { useCreateProduct } from './model/use-create-product';
import { useDeleteProduct } from './model/use-delete-product';
import { useProduct } from './model/use-product';
import { useProducts } from './model/use-products';
import { useUpdateProduct } from './model/use-update-product';

export { type CreateProductDTO, CreateProductSchema, type PaginatedProduct, type Product, type UpdateProductDTO, UpdateProductSchema };

export { productService, useCreateProduct, useDeleteProduct, useProduct, useProducts, useUpdateProduct };
