import { addressesRouter } from '@/pages/admin/address';
import { categoriesRouter } from '@/pages/admin/category';
import { imagesRouter } from '@/pages/admin/image';
import { ordersRouter } from '@/pages/admin/order';
import { createProductsRouter, productsRouter, updateProductsRouter } from '@/pages/admin/product';

export const adminRouter = [
  addressesRouter,
  categoriesRouter,
  imagesRouter,
  ordersRouter,
  productsRouter,
  createProductsRouter,
  updateProductsRouter
];