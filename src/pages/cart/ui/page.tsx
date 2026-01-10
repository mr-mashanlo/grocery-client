import { type FC } from 'react';
import { Link } from 'react-router';

import { useCartStore } from '@/entities/cart';
import { CartProducts } from '@/widgets/cart-products';
import { PageControls } from '@/widgets/page-controls';

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
        <PageControls controls={getQuantities() ? <Link to="/checkout" className="py-5 text-center bg-black text-white">Checkout</Link> : <Link to="/" className="py-5 text-center bg-black text-white">Back</Link>} />
      </div>
    </>
  );
};

export default CartPage;