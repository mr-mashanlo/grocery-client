import { type RouteObject } from 'react-router';

import CategoriesPage from '../ui/page';
import { categoriesLoader } from './loader';

export const categoriesRouter: RouteObject = {
  path: '/admin/categories',
  element: <CategoriesPage />,
  loader: categoriesLoader,
  hydrateFallbackElement: <div className="w-screen h-screen bg-zinc-50 fixed top-0 left-0 z-40" />
};