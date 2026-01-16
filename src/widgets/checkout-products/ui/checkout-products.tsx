import { type FC } from 'react';

import { getCartProducts, useCartStore } from '@/entities/cart';
import { ProductCard, useProducts } from '@/entities/product';

const CheckoutProducts: FC = () => {
  const { products: cartProducts } = useCartStore();
  const { products: shopProducts } = useProducts( { limit: '48' } );

  const products = getCartProducts( cartProducts, shopProducts.data || [] );

  return (
    <section>
      <h2 className="mb-8 sm:mb-18 text-4xl font-bold">Checkout</h2>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
        {products.map( product => <ProductCard key={product._id} product={product} quantity={product.quantity || 0} /> )}
      </div>
    </section>
  );
};

export default CheckoutProducts;