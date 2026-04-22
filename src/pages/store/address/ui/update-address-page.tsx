import { type FC } from 'react';

import { useMyAddress } from '@/entities/address';
import { UpdateAddressForm } from '@/features/address/update-address-form';

export const UpdateAddressPage: FC = () => {
  const { address } = useMyAddress();

  return (
    <section className="min-h-screen p-4 sm:p-10 flex items-center justify-center">
      <UpdateAddressForm address={address.data || { _id: '', user: '', city: '', address: '', phone: '' }} />
    </section>
  );
};

export default UpdateAddressPage;
