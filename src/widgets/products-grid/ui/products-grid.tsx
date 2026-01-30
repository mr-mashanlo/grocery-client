import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';

import { useCategories } from '@/entities/category';
import { ProductCard, useProducts } from '@/entities/product';
import { ProductFilterForm } from '@/features/product-filter-form';
import { ProductPagination } from '@/features/product-pagination';
import { UpdateQuantityForm } from '@/features/update-quantity-form';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const ProductsGrid: FC<Props> = ( props ) => {
  const { categories } = useCategories( { limit: '0' } );
  const [ searchParams ] = useSearchParams();
  const category = searchParams.get( 'category' ) || '';
  const sort = searchParams.get( 'sort' ) || '';
  const order = searchParams.get( 'order' ) || '';
  const page = searchParams.get( 'page' ) || '';

  const { products } = useProducts( { limit: '18', category, sort, order, page } );

  return (
    <section {...props}>
      <h2 className="mb-25 sm:mb-50 text-xl sm:text-2xl font-bold text-center">{categories.data?.data.find( item => item.slug === category )?.title || 'All Products'}</h2>
      <ProductFilterForm className="pb-8 sm:pb-12.5" />
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
        {products.data?.data.map( product => <ProductCard key={product._id} product={product} controls={<UpdateQuantityForm productId={product._id} quantity={product.stock} />} /> )}
      </div>
      <ProductPagination total={products.data?.total || 0} limit={products.data?.limit || 0} page={products.data?.page || 0} className="pt-8 sm:pt-12.5" />
    </section>
  );
};

export default ProductsGrid;