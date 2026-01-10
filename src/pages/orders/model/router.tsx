import { type RouteObject } from 'react-router';

import OrdersPage from '../ui/page';

export const ordersRouter: RouteObject = {
  path: '/orders',
  element: <OrdersPage />
};