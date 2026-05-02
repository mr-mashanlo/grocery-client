import type { RouteObject } from 'react-router';

import { addressesRouter } from '@/pages/admin/address';
import { categoriesRouter } from '@/pages/admin/category';
import { imagesRouter } from '@/pages/admin/image';
import { ordersRouter } from '@/pages/admin/order';
import { createProductsRouter, productsRouter, updateProductsRouter } from '@/pages/admin/product';

import { AdminLayout, ClearLayout } from '../layouts';

export const adminRouter: RouteObject = {
  children: [
    {
      element: <AdminLayout />,
      children: [
        addressesRouter,
        categoriesRouter,
        imagesRouter,
        ordersRouter,
        productsRouter
      ]
    },
    {
      element: <ClearLayout />,
      children: [
        createProductsRouter,
        updateProductsRouter
      ]
    }
  ]
};