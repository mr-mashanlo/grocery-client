import { type RouteObject } from 'react-router';

import AddressesPage from '../ui/page';
import { addressesLoader } from './loader';

export const addressesRouter: RouteObject = {
  path: '/admin/addresses',
  element: <AddressesPage />,
  loader: addressesLoader,
  hydrateFallbackElement: <div />
};