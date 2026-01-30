import { type FC } from 'react';

import { CheckoutProductsGrid } from '@/widgets/checkout-products-grid';
import { Header } from '@/widgets/header';

export const CheckoutPage: FC = () => {
  return (
    <>
      <title>Checkout | Grocery</title>
      <meta property="og:title" content="Checkout | Grocery" />
      <meta name="description" content="Secure checkout to complete your grocery order quickly and safely" />
      <meta property="og:description" content="Secure checkout to complete your grocery order quickly and safely" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-8 sm:px-25 sm:py-12.5">
        <Header />
        <CheckoutProductsGrid className="mt-25 sm:mt-50" />
      </div>
    </>
  );
};

export default CheckoutPage;