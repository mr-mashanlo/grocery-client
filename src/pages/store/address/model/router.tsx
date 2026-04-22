import { type RouteObject } from 'react-router';

import CreateAddressPage from '../ui/create-address-page';
import AddressPage from '../ui/page';
import UpdateAddressPage from '../ui/update-address-page';

export const addressRouter: RouteObject = {
  path: '/address',
  element: <AddressPage />
};

export const createAddressRouter: RouteObject = {
  path: '/address/create',
  element: <CreateAddressPage />
};

export const updateAddressRouter: RouteObject = {
  path: '/address/update',
  element: <UpdateAddressPage />
};