import { type FC, type ReactNode } from 'react';

import { type Product } from '../model/schema';

interface Props {
  product: Product
  controls: ReactNode
}

const ProductCard: FC<Props> = ( { product, controls } ) => {
  return (
    <article className="flex bg-zinc-100 rounded-2xl">
      <img src="https://placehold.co/400" alt={product.title} className="w-25 h-25 bg-zinc-200 rounded-s-2xl" />
      <div className="flex justify-between grow flex-wrap">
        <h3 className="w-2/3 h-12.5 px-3 flex items-center grow font-bold border-b border-zinc-200"><a className="line-clamp-1">{product.title}</a></h3>
        <p className="w-12.5 h-12.5 flex items-center justify-center border-b border-l border-zinc-200">{product.quantity?.quantity || 99}</p>
        <p className="h-12.5 px-3 flex items-center grow">${product.price}</p>
        {controls}
      </div>
    </article>
  );
};

export default ProductCard;