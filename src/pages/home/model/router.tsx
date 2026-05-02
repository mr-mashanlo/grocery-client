import { type RouteObject } from 'react-router';

import HomePage from '../ui/page';
import { productsLoader } from './loader';

export const homeRouter: RouteObject = {
  path: '/',
  element: <HomePage />,
  loader: productsLoader,
  hydrateFallbackElement: <div />
};