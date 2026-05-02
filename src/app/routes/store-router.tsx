import type { RouteObject } from 'react-router';

import { homeRouter } from '@/pages/home';
import { addressRouter, createAddressRouter, updateAddressRouter } from '@/pages/store/address';
import { cartRouter } from '@/pages/store/cart';
import { categoriesRouter } from '@/pages/store/category';
import { checkoutRouter } from '@/pages/store/checkout';
import { ordersRouter } from '@/pages/store/order';
import { productRouter, productsRouter } from '@/pages/store/product';

import { ClearLayout, StoreLayout } from '../layouts';

export const storeRouter: RouteObject = {
  children: [
    {
      element: <StoreLayout />,
      children: [
        addressRouter,
        cartRouter,
        categoriesRouter,
        checkoutRouter,
        homeRouter,
        ordersRouter,
        productRouter,
        productsRouter
      ]
    },
    {
      element: <ClearLayout />,
      children: [
        createAddressRouter,
        updateAddressRouter
      ]
    }
  ]
};