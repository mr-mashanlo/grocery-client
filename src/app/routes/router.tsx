import { createBrowserRouter } from 'react-router';

import { adminRouter } from './admin-router';
import { authRouter } from './auth-router';
import { storeRouter } from './store-router';

export const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      adminRouter,
      storeRouter,
      authRouter
    ]
  }
] );