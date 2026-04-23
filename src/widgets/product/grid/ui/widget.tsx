import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Link, useSearchParams } from 'react-router';

import { type PaginatedProduct, useProducts } from '@/entities/product';

import Header from './header';
import Pagination from './pagination';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const Skeleton: FC = () => {
  return (
    <section className="mx-4 my-8 sm:mx-10 sm:my-20 animate-pulse">
      <Header />
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {Array.from( { length: 6 } ).map( ( _, index ) => <li key={index} className="w-full aspect-square bg-zinc-200 rounded-xl"></li> )}
      </ul>
      <Pagination limit={0} page={0} total={0} />
    </section>
  );
};

const Widget: FC<{ products?: PaginatedProduct}> = ( { products } ) => {
  return (
    <section className="mx-4 my-8 sm:mx-10 sm:my-20">
      <Header />
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {products?.data.map( product =>
          <li key={product._id} className="relative">
            <Link to={`/products/${product.slug}`} className="block rounded-xl overflow-hidden"><img src={product.images[0].url} alt={product.images[0].alt} className="w-full h-full aspect-square" /></Link>
            <h3 className="absolute bottom-5 left-5">{product.name}</h3>
            <p className="absolute bottom-5 right-5">${product.salePrice ? product.salePrice : product.price}</p>
          </li>
        )}
      </ul>
      <Pagination limit={products?.limit || 0} page={products?.page || 0} total={products?.total || 0} />
    </section>
  );
};

const ProductGrid: FC<Props> = () => {
  const [ searchParams ] = useSearchParams();
  const { products } = useProducts( { limit: '9', archived: 'false', ...Object.fromEntries( searchParams.entries() ) } );

  return products.isLoading ? <Skeleton /> : <Widget products={products.data} />;
};

export default ProductGrid;