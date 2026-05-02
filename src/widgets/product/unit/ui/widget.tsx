import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { useParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { type Product, useProduct } from '@/entities/product';
import { AddToCartButton } from '@/features/cart/add-to-cart-button';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  product?: Product
}

const Skeleton: FC<Props> = ( { className, ...props } ) => {
  return (
    <section aria-hidden="true" className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20 animate-pulse', className )} {...props}>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
        <ul className="grid sm:grid-cols-2 gap-4 sm:gap-5 sm:col-span-2">
          {Array.from( { length: 4 } ).map( ( _, index ) => <li key={index} className="w-full aspect-square bg-zinc-200 rounded-xl"></li> )}
        </ul>
        <div className="relative">
          <div className="sm:sticky sm:top-20">
            <div className="h-7 mb-5 flex items-center font-bold text-xl"><span className="block w-30 h-2 bg-zinc-200"></span></div>
            <div className="h-4.5 mb-5 flex items-center"><span className="block w-15 h-2 bg-zinc-200"></span></div>
            <div className="h-4.5 mb-5 flex items-center"><span className="block w-20 h-2 bg-zinc-200"></span></div>
            <div className="h-12.5 mb-5 w-full p-4 rounded-xl bg-zinc-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Widget: FC<Props> = ( { className, product, ...props } ) => {
  return (
    <section className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20', className )} {...props}>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
        <ul className="grid sm:grid-cols-2 gap-4 sm:gap-5 sm:col-span-2">
          {product?.images.map( image => <li key={image._id} className="block aspect-square rounded-xl overflow-hidden"><img src={image.url} alt={image.alt} className="w-full h-full" /></li> )}
        </ul>
        <div className="relative">
          <div className="sm:sticky sm:top-20">
            <h1 className="mb-5 font-bold text-xl">{product?.name}</h1>
            <p className="mb-5">{product?.salePrice ? <span>${product.salePrice}</span> : null} <span className={twMerge( product?.salePrice && 'text-zinc-400 line-through' )}>${product?.price}</span></p>
            <p className="mb-5">{product?.categories.map( category => category?.name ).join( ', ' )}</p>
            <AddToCartButton product={{ _id: product?._id || '', name: product?.name || '', price: product?.salePrice || product?.price || 0, image: { url: product?.images[0].url || '', alt: product?.images[0].alt || '' } }} className="mb-5 w-full p-4 rounded-xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">Add to cart</AddToCartButton>
            <p className="mb-5 leading-[200%]">{product?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductUnit: FC<Props> = () => {
  const { slug } = useParams();
  const { product } = useProduct( slug || '' );
  return product.isLoading ? <Skeleton /> : <Widget product={product.data} />;
};

export default ProductUnit;