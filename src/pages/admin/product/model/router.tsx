import { type RouteObject } from 'react-router';

import CreateProductsPage from '../ui/create-products-page';
import ProductsPage from '../ui/products-page';
import UpdateProductsPage from '../ui/update-products-page';
import { productsLoader } from './loader';

export const productsRouter: RouteObject = {
  path: '/admin/products',
  element: <ProductsPage />,
  loader: productsLoader,
  hydrateFallbackElement: <div className="w-screen h-screen bg-zinc-50 fixed top-0 left-0 z-40" />
};

export const createProductsRouter: RouteObject = {
  path: '/admin/products/create',
  element: <CreateProductsPage />
};

export const updateProductsRouter: RouteObject = {
  path: '/admin/products/:id',
  element: <UpdateProductsPage />
};