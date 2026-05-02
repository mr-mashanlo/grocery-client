import { type RouteObject } from 'react-router';

import ImagesPage from '../ui/page';
import { imagesLoader } from './loader';

export const imagesRouter: RouteObject = {
  path: '/admin/images',
  element: <ImagesPage />,
  loader: imagesLoader,
  hydrateFallbackElement: <div className="w-screen h-screen bg-zinc-50 fixed top-0 left-0 z-40" />
};