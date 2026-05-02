import type { RouteObject } from 'react-router';

import { signInRouter } from '@/pages/auth/sign-in';
import { signUpRouter } from '@/pages/auth/sign-up';
import { notFoundRouter } from '@/pages/not-found';

import { ClearLayout } from '../layouts';

export const authRouter: RouteObject = {
  children: [
    {
      element: <ClearLayout />,
      children: [
        signInRouter,
        signUpRouter,
        notFoundRouter
      ]
    }
  ]
};