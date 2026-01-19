import { createBrowserRouter } from 'react-router';

import { adminOrderRouter } from '@/pages/admin-order';
import { adminOrdersRouter } from '@/pages/admin-orders';
import { cartRouter } from '@/pages/cart';
import { checkoutRouter } from '@/pages/checkout';
import { homeRouter } from '@/pages/home';
import { notFoundRouter } from '@/pages/not-found';
import { orderRouter } from '@/pages/order';
import { ordersRouter } from '@/pages/orders';
import { signInRouter } from '@/pages/sign-in';
import { signUpRouter } from '@/pages/sign-up';

import MainLayout from './layouts/main';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <MainLayout />,
        children: [
          signInRouter,
          signUpRouter,
          homeRouter,
          cartRouter,
          checkoutRouter,
          ordersRouter,
          orderRouter,
          adminOrdersRouter,
          adminOrderRouter,
          notFoundRouter
        ]
      }
    ]
  }
] );

export default router;