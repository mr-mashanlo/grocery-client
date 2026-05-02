import { type RouteObject } from 'react-router';

import AddressesPage from '../ui/page';
import { addressesLoader } from './loader';

export const addressesRouter: RouteObject = {
  path: '/admin/addresses',
  element: <AddressesPage />,
  loader: addressesLoader,
  hydrateFallbackElement: <div className="w-screen h-screen bg-zinc-50 fixed top-0 left-0 z-40" />
};