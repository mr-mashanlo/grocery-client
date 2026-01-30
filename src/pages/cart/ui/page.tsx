import { type FC } from 'react';

import { CartProductsGrid } from '@/widgets/cart-products-grid';
import { Header } from '@/widgets/header';

export const CartPage: FC = () => {
  return (
    <>
      <title>Cart | Grocery</title>
      <meta property="og:title" content="Cart | Grocery" />
      <meta name="description" content="Review your selected groceries and adjust quantities before checkout" />
      <meta property="og:description" content="Review your selected groceries and adjust quantities before checkout" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-8 sm:px-25 sm:py-12.5">
        <Header />
        <CartProductsGrid className="mt-25 sm:mt-50" />
      </div>
    </>
  );
};

export default CartPage;