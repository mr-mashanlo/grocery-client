import { type FC, type ReactNode } from 'react';

import { type Product } from '../model/schema';

interface Props {
  product: Product,
  controls?: ReactNode
}

const ProductCard: FC<Props> = ( { product, controls } ) => {
  return (
    <article className="flex bg-zinc-100 rounded-2xl">
      <img src="https://placehold.co/400" alt={product.title} className="inline-block w-25 h-25 shrink-0 bg-zinc-200 rounded-s-2xl" />
      <div className="w-full">
        <div className="flex">
          <h3 className="w-12.5 h-12.5 px-3 flex items-center grow font-bold"><a className="line-clamp-1">{product.title} ({product.unit})</a></h3>
        </div>
        <div className="flex border-t border-zinc-200">
          <p className="sm:min-w-25 h-12.5 px-3 flex items-center grow">${product.price}</p>
          {controls}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;