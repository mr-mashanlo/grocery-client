import { ChevronRight } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Link } from 'react-router';

import { getCartProducts, useCartStore } from '@/entities/cart';
import { ProductCard, useProducts } from '@/entities/product';
import { UpdateQuantityForm } from '@/features/update-quantity-form';
import { mapCartPrices } from '@/shared/libs';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const CartProductsGrid: FC<Props> = ( props ) => {
  const { products: cartProducts, getQuantities } = useCartStore();
  const { products: shopProducts } = useProducts( { limit: '0' } );

  const products = getCartProducts( cartProducts, shopProducts.data?.data || [] );

  return (
    <section {...props}>
      <h2 className="mb-25 sm:mb-50 text-xl sm:text-2xl font-bold text-center">Cart</h2>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
        {products.map( product => <ProductCard key={product._id} product={product} controls={<UpdateQuantityForm productId={product._id} quantity={product.stock} />} /> )}
      </div>
      {getQuantities() > 0 &&
        <div className="pt-8 sm:pt-12.5 flex items-center justify-between gap-8 sm:gap-15">
          <p>Quantity: {getQuantities()}, Total: ${mapCartPrices( cartProducts, shopProducts.data?.data || [] )}</p>
          <Link to="/checkout" className="flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-default">
            Checkout
            <ChevronRight aria-hidden="true" strokeWidth={3} className="size-3" />
          </Link>
        </div>
      }
    </section>
  );
};

export default CartProductsGrid;