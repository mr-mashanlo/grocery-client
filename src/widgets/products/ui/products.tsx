import { type FC } from 'react';

import { ProductCard, useProducts } from '@/entities/product';
import { CartControls } from '@/features/cart-controls';

const Products: FC = () => {
  const { products } = useProducts( { limit: '0' } );

  return (
    <section className="max-w-200 mx-auto  grid sm:grid-cols-2 gap-3 sm:gap-5">
      {products.data?.data.map( product => <ProductCard key={product._id} product={product} controls={<CartControls product={product._id} />} /> )}
    </section>
  );
};

export default Products;