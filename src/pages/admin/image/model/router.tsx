import { type RouteObject } from 'react-router';

import ImagesPage from '../ui/page';

export const imagesRouter: RouteObject = {
  path: '/admin/images',
  element: <ImagesPage />
};