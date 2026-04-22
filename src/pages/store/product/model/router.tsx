import { type RouteObject } from 'react-router';

import ProductPage from '../ui/product-page';
import ProductsPage from '../ui/products-page';

export const productsRouter: RouteObject = {
  path: '/products',
  element: <ProductsPage />
};

export const productRouter: RouteObject = {
  path: '/products/:id',
  element: <ProductPage />
};