import { type FC } from 'react';

import { CreateAddressForm } from '@/features/address/create-address-form';

export const CreateAddressPage: FC = () => {
  return (
    <section className="min-h-screen p-4 sm:p-10 flex items-center justify-center">
      <CreateAddressForm />
    </section>
  );
};

export default CreateAddressPage;
