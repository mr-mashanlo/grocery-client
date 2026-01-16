import { type FC } from 'react';

import { getCartProducts, useCartStore } from '@/entities/cart';
import { ProductCard, useProducts } from '@/entities/product';
import { CartControls } from '@/features/cart-controls';

const CartProducts: FC = () => {
  const { products: cartProducts } = useCartStore();
  const { products: shopProducts } = useProducts( { limit: '48' } );

  const products = getCartProducts( cartProducts, shopProducts.data || [] );

  return (
    <section>
      <h2 className="mb-8 sm:mb-18 text-4xl font-bold">Cart</h2>
      {products.length
        ?
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
          {products.map( product => <ProductCard key={product._id} product={product} controls={<CartControls productId={product._id} quantity={product.stock} />} quantity={product.stock} /> )}
        </div>
        :
        <div className="text-center">
          <p>Your cart is empty. Add items to continue with your order</p>
        </div>
      }
    </section>
  );
};

export default CartProducts;