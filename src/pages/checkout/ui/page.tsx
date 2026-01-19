import { type FC } from 'react';

import { useAddress } from '@/entities/address';
import { useCartStore } from '@/entities/cart';
import { CreateAddressForm } from '@/features/create-address-form';
import { CreateOrderForm } from '@/features/create-order-form';
import { PageControls } from '@/shared/ui';
import { CheckoutProducts } from '@/widgets/checkout-products';

export const CheckoutPage: FC = () => {
  const { address } = useAddress();
  const { getQuantities } = useCartStore();

  return (
    <>
      <title>Checkout | Grocery</title>
      <meta property="og:title" content="Checkout | Grocery" />
      <meta name="description" content="Secure checkout to complete your grocery order quickly and safely" />
      <meta property="og:description" content="Secure checkout to complete your grocery order quickly and safely" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-10 pb-19 sm:p-37.5">
        <CheckoutProducts />
        <CreateAddressForm className="mt-8 sm:mt-37.5" />
        <PageControls
          form={<p className="p-5 bg-zinc-100">Total: $0, Quantity: {getQuantities()}</p>}
          button={address.data && getQuantities() ? <CreateOrderForm /> : null}
        />
      </div>
    </>
  );
};

export default CheckoutPage;