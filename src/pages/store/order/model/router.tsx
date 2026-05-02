import { type RouteObject } from 'react-router';

import OrdersPage from '../ui/page';
import { ordersLoader } from './loader';

export const ordersRouter: RouteObject = {
  path: '/orders',
  element: <OrdersPage />,
  loader: ordersLoader,
  hydrateFallbackElement: <div />
};