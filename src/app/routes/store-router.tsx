import { addressRouter, createAddressRouter, updateAddressRouter } from '@/pages/store/address';
import { cartRouter } from '@/pages/store/cart';
import { categoriesRouter } from '@/pages/store/category';
import { checkoutRouter } from '@/pages/store/checkout';
import { ordersRouter } from '@/pages/store/order';
import { productRouter, productsRouter } from '@/pages/store/product';

export const storeRouter = [
  createAddressRouter,
  addressRouter,
  updateAddressRouter,
  cartRouter,
  categoriesRouter,
  checkoutRouter,
  ordersRouter,
  productRouter,
  productsRouter
];