import { createBrowserRouter } from 'react-router';

import { addressRouter } from '@/pages/address';
import { cartRouter } from '@/pages/cart';
import { homeRouter } from '@/pages/home';
import { notFoundRouter } from '@/pages/not-found';
import { ordersRouter } from '@/pages/order';
import { signInRouter } from '@/pages/sign-in';
import { signUpRouter } from '@/pages/sign-up';

import MainLayout from './layouts/main';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <MainLayout />,
        children: [ signInRouter, signUpRouter, homeRouter, cartRouter, addressRouter, ordersRouter, notFoundRouter ]
      }
    ]
  }
] );

export default router;