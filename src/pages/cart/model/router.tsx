import { type RouteObject } from 'react-router';

import CartPage from '../ui/page';

export const cartRouter: RouteObject = {
  path: '/cart',
  element: <CartPage />
};