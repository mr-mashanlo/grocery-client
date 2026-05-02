import { type RouteObject } from 'react-router';

import CreateAddressPage from '../ui/create-address-page';
import AddressPage from '../ui/page';
import UpdateAddressPage from '../ui/update-address-page';
import { addressLoader } from './loader';

export const addressRouter: RouteObject = {
  path: '/address',
  element: <AddressPage />,
  loader: addressLoader,
  hydrateFallbackElement: <div className="w-screen h-screen bg-zinc-50 fixed top-0 left-0 z-40" />
};

export const createAddressRouter: RouteObject = {
  path: '/address/create',
  element: <CreateAddressPage />
};

export const updateAddressRouter: RouteObject = {
  path: '/address/update',
  element: <UpdateAddressPage />
};