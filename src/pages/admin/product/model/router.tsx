import { type RouteObject } from 'react-router';

import CreateProductsPage from '../ui/create-products-page';
import ProductsPage from '../ui/products-page';
import UpdateProductsPage from '../ui/update-products-page';

export const productsRouter: RouteObject = {
  path: '/admin/products',
  element: <ProductsPage />
};

export const createProductsRouter: RouteObject = {
  path: '/admin/products/create',
  element: <CreateProductsPage />
};

export const updateProductsRouter: RouteObject = {
  path: '/admin/products/:id',
  element: <UpdateProductsPage />
};