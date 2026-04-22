import { createBrowserRouter } from 'react-router';

import { signInRouter } from '@/pages/auth/sign-in';
import { signUpRouter } from '@/pages/auth/sign-up';
import { homeRouter } from '@/pages/home';
import { notFoundRouter } from '@/pages/not-found';

import { adminRouter } from './admin-router';
import MainLayout from '../layouts/main';
import { storeRouter } from './store-router';

export const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <MainLayout />,
        children: adminRouter
      },
      {
        element: <MainLayout />,
        children: storeRouter
      },
      {
        element: <MainLayout />,
        children: [
          signInRouter,
          signUpRouter,
          homeRouter,
          notFoundRouter
        ]
      }
    ]
  }
] );