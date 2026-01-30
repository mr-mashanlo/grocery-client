import { type RouteObject } from 'react-router';

import OrderPage from '../ui/page';

export const orderRouter: RouteObject = {
  path: '/orders/:id',
  element: <OrderPage />
};