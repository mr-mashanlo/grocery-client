import { type FC } from 'react';

import { ProductCard, useFilterStore, useProducts } from '@/entities/product';
import { CartControls } from '@/features/cart-controls';

const Products: FC = () => {
  const { category } = useFilterStore();
  const { products } = useProducts( { limit: '0', category: category._id } );

  return (
    <section className="max-w-200 mx-auto">
      <h2 className="mb-15 text-center text-2xl font-bold">{category.title}</h2>
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
        {products.data?.data.map( product => <ProductCard key={product._id} product={product} controls={<CartControls product={product._id} />} /> )}
      </div>
    </section>
  );
};

export default Products;