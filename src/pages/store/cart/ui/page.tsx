import { type FC } from 'react';

import { CartTable } from '@/widgets/cart/table';

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

      <main className="min-h-screen my-8 sm:my-20">
        <section className="mx-4 my-8 sm:mx-10 sm:my-20">
          <h1 className="mb-3 text-xl sm:text-2xl font-semibold">Cart</h1>
          <p className="max-w-2xl leading-[200%]">Illo rerum, vitae sint impedit laboriosam ratione ducimus fugiat cumque vel possimus dolorem sed nobis deserunt libero in voluptatibus reprehenderit!</p>
        </section>
        <CartTable />
      </main>
    </>
  );
};

export default CartPage;