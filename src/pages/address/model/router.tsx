import { type RouteObject } from 'react-router';

import AddressPage from '../ui/page';

export const addressRouter: RouteObject = {
  path: '/address',
  element: <AddressPage />
};