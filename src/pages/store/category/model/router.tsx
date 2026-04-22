import { type RouteObject } from 'react-router';

import CategoriesPage from '../ui/page';

export const categoriesRouter: RouteObject = {
  path: '/categories',
  element: <CategoriesPage />
};