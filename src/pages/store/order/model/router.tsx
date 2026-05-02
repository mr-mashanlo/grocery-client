import { type RouteObject } from 'react-router';

import OrdersPage from '../ui/page';
import { ordersLoader } from './loader';

export const ordersRouter: RouteObject = {
  path: '/orders',
  element: <OrdersPage />,
  loader: ordersLoader,
  hydrateFallbackElement: <div className="w-screen h-screen bg-zinc-50 fixed top-0 left-0 z-40" />
};