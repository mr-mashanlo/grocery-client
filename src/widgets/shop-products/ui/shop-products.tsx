import { type FC } from 'react';

import { ProductCard, useFilterStore, useProducts } from '@/entities/product';
import { CartControls } from '@/features/cart-controls';

const ShopProducts: FC = () => {
  const { category } = useFilterStore();
  const { products } = useProducts( category._id ? { limit: '0', archived: 'false', category: category._id } : { limit: '0', archived: 'false' } );

  return (
    <section>
      <h2 className="mb-8 sm:mb-18 text-4xl font-bold">{category.title}</h2>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
        {products.data?.data.map( product => <ProductCard key={product._id} product={product} controls={<CartControls product={product._id} />} quantity={product.stock?.quantity || 99} /> )}
      </div>
    </section>
  );
};

export default ShopProducts;