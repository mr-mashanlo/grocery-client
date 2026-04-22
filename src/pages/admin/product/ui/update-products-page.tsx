import { type FC } from 'react';
import { useParams } from 'react-router';

import { useProduct } from '@/entities/product';
import { UpdateProductForm } from '@/features/product/update-product-form';

export const UpdateProductsPage: FC = () => {
  const { id } = useParams();
  const { product } = useProduct( id || '' );

  return (
    <section className="min-h-screen p-4 sm:p-10 flex items-center justify-center">
      <UpdateProductForm product={product.data || { _id: '', name: '', slug: '', price: 0, archived: false, images: [], categories: [] }} />
    </section>
  );
};

export default UpdateProductsPage;