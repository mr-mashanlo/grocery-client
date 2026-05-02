import { type RouteObject } from 'react-router';

import OrdersPage from '../ui/page';
import { ordersLoader } from './loader';

export const ordersRouter: RouteObject = {
  path: '/admin/orders',
  element: <OrdersPage />,
  loader: ordersLoader,
  hydrateFallbackElement: <div />
};