import { createBrowserRouter } from 'react-router';

import { addressRouter } from '@/pages/address';
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
        children: [ signInRouter, signUpRouter, homeRouter, cartRouter, checkoutRouter, addressRouter, ordersRouter, orderRouter, notFoundRouter ]
      }
    ]
  }
] );

export default router;