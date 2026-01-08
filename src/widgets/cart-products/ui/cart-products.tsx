import { type FC } from 'react';

import { useCartStore } from '@/entities/cart';
import { ProductCard, useProducts } from '@/entities/product';
import type { Product } from '@/entities/product/model/schema';
import { CartControls } from '@/features/cart-controls';

const CartProducts: FC = () => {
  const { products: cartProducts } = useCartStore();
  const { products: shopProducts } = useProducts( { limit: '0' } );

  const products = cartProducts.map( cartProduct => shopProducts.data?.data.find( shopProduct => cartProduct.product === shopProduct._id ) ).filter( ( product ): product is Product => Boolean( product ) );

  return (
    <section className="max-w-200 mx-auto">
      <h2 className="mb-8 sm:mb-15 text-center text-3xl font-bold">Cart</h2>
      {products.length
        ?
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {products.map( product => <ProductCard key={product._id} product={product} controls={<CartControls product={product._id} />} /> )}
        </div>
        :
        <div className="text-center">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      }
    </section>
  );
};

export default CartProducts;