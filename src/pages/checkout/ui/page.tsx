import { type FC } from 'react';
import { Link } from 'react-router';

import { useAddress } from '@/entities/address';
import { useCartStore } from '@/entities/cart';
import { AddressForm } from '@/features/address-form';
import { OrderForm } from '@/features/order-form';
import { CheckoutProducts } from '@/widgets/checkout-products';
import { PageControls } from '@/widgets/page-controls';

export const CheckoutPage: FC = () => {
  const { address } = useAddress();
  const { getQuantities } = useCartStore();

  return (
    <>
      <title>Grocery</title>
      <meta property="og:title" content="Grocery" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-10 pb-19 sm:p-37.5">
        <CheckoutProducts />
        <AddressForm className="mt-8 sm:mt-37.5" />
        <PageControls controls={address.data && getQuantities() ? <OrderForm /> : <Link to="/" className="py-5 text-center bg-black text-white">Back</Link>} />
      </div>
    </>
  );
};

export default CheckoutPage;