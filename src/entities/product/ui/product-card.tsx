import { type FC, type ReactNode } from 'react';

import { type Product } from '../model/schema';

interface Props {
  product: Product,
  controls?: ReactNode,
  quantity: number
}

const ProductCard: FC<Props> = ( { product, quantity, controls } ) => {
  return (
    <article className="flex bg-zinc-100 rounded-2xl">
      <img src="https://placehold.co/400" alt={product.title} className="w-25 h-25 bg-zinc-200 rounded-s-2xl" />
      <div className="w-full">
        <div className="flex">
          <h3 className="w-12.5 h-12.5 px-3 flex items-center grow font-bold"><a className="line-clamp-1">{product.title} ({product.unit})</a></h3>
          <p className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200">{quantity}</p>
        </div>
        <div className="flex border-t border-zinc-200">
          <p className="min-w-25 h-12.5 px-3 flex items-center grow">${product.price}</p>
          {controls}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;