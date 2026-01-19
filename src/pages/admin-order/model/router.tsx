import { type RouteObject } from 'react-router';

import AdminOrderPage from '../ui/page';

export const adminOrderRouter: RouteObject = {
  path: 'admin/order/:id',
  element: <AdminOrderPage />
};