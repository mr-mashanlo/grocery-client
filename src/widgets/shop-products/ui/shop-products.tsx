import { type FC } from 'react';
import { useSearchParams } from 'react-router';

import { ProductCard, useFilterStore, useProducts } from '@/entities/product';
import { UpdateQuantityForm } from '@/features/update-quantity-form';

const ShopProducts: FC = () => {
  const [ searchParams ] = useSearchParams();
  const sort = searchParams.get( 'sort' ) || '';
  const order = searchParams.get( 'order' ) || '';

  const { category } = useFilterStore();
  const { products } = useProducts( { limit: '48', category: category._id, sort, order } );

  return (
    <section>
      <h2 className="mb-8 sm:mb-18 text-4xl font-bold">{category.title}</h2>
      {products.data?.length
        ?
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
          {products.data?.map( product => <ProductCard key={product._id} product={product} controls={<UpdateQuantityForm productId={product._id} quantity={product.stock} />} quantity={product.stock} /> )}
        </div>
        :
        <div className="text-center">
          <p>No products found. Try adjusting your search or filters</p>
        </div>
      }
    </section>
  );
};

export default ShopProducts;