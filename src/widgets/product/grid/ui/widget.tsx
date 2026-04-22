import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Link, useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { useProducts } from '@/entities/product';

import Header from './header';
import Pagination from './pagination';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string
}

const ProductGrid: FC<Props> = ( { className, ...props } ) => {
  const [ searchParams ] = useSearchParams();
  const { products } = useProducts( { limit: '9', archived: 'false', ...Object.fromEntries( searchParams.entries() ) } );

  return (
    <section className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20', className )} {...props}>
      <Header />
      {products.isLoading ?
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {Array.from( { length: 6 } ).map( ( _, index ) => <li key={index} className="w-full aspect-square bg-zinc-100 rounded-xl"></li> )}
        </ul> :
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {products.data?.data.map( product =>
            <li key={product._id} className="relative">
              <Link to={`/products/${product.slug}`} className="block rounded-xl overflow-hidden"><img src={product.images[0].url} alt={product.images[0].alt} className="w-full h-full aspect-square" /></Link>
              <h3 className="absolute bottom-5 left-5">{product.name}</h3>
              <p className="absolute bottom-5 right-5">${product.salePrice ? product.salePrice : product.price}</p>
            </li>
          )}
        </ul>
      }
      <Pagination limit={products.data?.limit || 0} page={products.data?.page || 0} total={products.data?.total || 0} />
    </section>
  );
};

export default ProductGrid;