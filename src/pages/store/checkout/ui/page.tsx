import { type FC } from 'react';
import { useNavigate } from 'react-router';

import { useMyAddress } from '@/entities/address';
import { useMe } from '@/entities/auth';
import { CheckoutTable } from '@/widgets/checkout/table';
import { Header } from '@/widgets/header';

export const CheckoutPage: FC = () => {
  const navigate = useNavigate();
  const { me } = useMe();
  const { address } = useMyAddress();

  if ( me.isFetched && me.isError ) {
    navigate( '/signin?from=checkout', { replace: true } );
  }

  if ( address.isFetched && address.data === null ) {
    navigate( '/address/create?from=checkout', { replace: true } );
  }

  return (
    <>
      <title>Checkout | Grocery</title>
      <meta property="og:title" content="Checkout | Grocery" />
      <meta name="description" content="Secure checkout to complete your grocery order quickly and safely" />
      <meta property="og:description" content="Secure checkout to complete your grocery order quickly and safely" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <Header />
      <section className="mx-4 my-8 sm:mx-10 sm:my-20">
        <h1 className="mb-3 text-xl sm:text-2xl font-semibold">Checkout</h1>
        <p className="max-w-2xl leading-[200%]">Quam debitis in non pariatur assumenda beatae doloribus temporibus nam ipsum, nisi eaque est sequi at soluta nemo deserunt aperiam.</p>
      </section>
      <CheckoutTable />
    </>
  );
};

export default CheckoutPage;