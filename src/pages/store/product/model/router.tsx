import { type RouteObject } from 'react-router';

import ProductPage from '../ui/product-page';
import ProductsPage from '../ui/products-page';
import { productLoader, productsLoader } from './loader';

export const productsRouter: RouteObject = {
  path: '/products',
  element: <ProductsPage />,
  loader: productsLoader,
  hydrateFallbackElement: <div className="w-screen h-screen bg-zinc-50 fixed top-0 left-0 z-40" />
};

export const productRouter: RouteObject = {
  path: '/products/:slug',
  element: <ProductPage />,
  loader: productLoader,
  hydrateFallbackElement: <div className="w-screen h-screen bg-zinc-50 fixed top-0 left-0 z-40" />
};