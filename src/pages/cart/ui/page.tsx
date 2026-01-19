import { type FC } from 'react';
import { Link } from 'react-router';

import { useCartStore } from '@/entities/cart';
import { PageControls } from '@/shared/ui';
import { CartProducts } from '@/widgets/cart-products';

export const CartPage: FC = () => {
  const { getQuantities } = useCartStore();

  return (
    <>
      <title>Cart | Grocery</title>
      <meta property="og:title" content="Cart | Grocery" />
      <meta name="description" content="Review your selected groceries and adjust quantities before checkout" />
      <meta property="og:description" content="Review your selected groceries and adjust quantities before checkout" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-10 pb-19 sm:p-37.5">
        <CartProducts />
        <PageControls
          form={<p className="p-5 bg-zinc-100">Total: $0, Quantity: {getQuantities()}</p>}
          button={getQuantities() ? <Link to="/checkout" className="block w-full p-5 bg-black text-white text-center">Checkout</Link> : null}
        />
      </div>
    </>
  );
};

export default CartPage;