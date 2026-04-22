import { type RouteObject } from 'react-router';

import OrdersPage from '../ui/page';

export const ordersRouter: RouteObject = {
  path: '/admin/orders',
  element: <OrdersPage />
};