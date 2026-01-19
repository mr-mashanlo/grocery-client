import { type RouteObject } from 'react-router';

import AdminOrdersPage from '../ui/page';

export const adminOrdersRouter: RouteObject = {
  path: '/admin/orders',
  element: <AdminOrdersPage />
};