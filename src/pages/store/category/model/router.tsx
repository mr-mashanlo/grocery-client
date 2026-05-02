import { type RouteObject } from 'react-router';

import CategoriesPage from '../ui/page';
import { categoriesLoader } from './loader';

export const categoriesRouter: RouteObject = {
  path: '/categories',
  element: <CategoriesPage />,
  loader: categoriesLoader,
  hydrateFallbackElement: <div />
};