import { type FC } from 'react';
import { Link } from 'react-router';

import { useAddress } from '@/entities/address';
import { useCartStore } from '@/entities/cart';
import { AddressForm } from '@/features/address-form';
import { OrderForm } from '@/features/order-form';
import { PageControls } from '@/widgets/page-controls';

export const AddressPage: FC = () => {
  const { address } = useAddress();
  const { getQuantities } = useCartStore();

  return (
    <>
      <title>Grocery</title>
      <meta property="og:title" content="Grocery" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="h-screen px-4 py-10 pb-19 sm:p-15 sm:pb-20 flex justify-center items-center">
        <AddressForm />
        <PageControls controls={address.data && getQuantities() ? <OrderForm /> : <Link to="/" className="py-5 text-center bg-zinc-200">Back</Link>} />
      </div>
    </>
  );
};

export default AddressPage;