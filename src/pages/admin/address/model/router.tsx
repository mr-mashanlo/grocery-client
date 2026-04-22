import { type RouteObject } from 'react-router';

import AddressesPage from '../ui/page';

export const addressesRouter: RouteObject = {
  path: '/admin/addresses',
  element: <AddressesPage />
};