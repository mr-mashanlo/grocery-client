import { type RouteObject } from 'react-router';

import CheckoutPage from '../ui/page';

export const checkoutRouter: RouteObject = {
  path: '/checkout',
  element: <CheckoutPage />
};