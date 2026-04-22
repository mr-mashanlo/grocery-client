import { type FC } from 'react';

import { CreateProductForm } from '@/features/product/create-product-form';

export const CreateProductsPage: FC = () => {
  return (
    <section className="min-h-screen p-4 sm:p-10 flex items-center justify-center">
      <CreateProductForm />
    </section>
  );
};

export default CreateProductsPage;