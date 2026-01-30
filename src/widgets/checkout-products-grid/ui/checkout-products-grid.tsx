import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Link } from 'react-router';

import { useAddress } from '@/entities/address';
import { getCartProducts, useCartStore } from '@/entities/cart';
import { ProductCard, useProducts } from '@/entities/product';
import { CreateAddressForm } from '@/features/create-address-form';
import { CreateOrderForm } from '@/features/create-order-form';
import { mapCartPrices } from '@/shared/libs';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const CheckoutProductsGrid: FC<Props> = ( props ) => {
  const { products: cartProducts, getQuantities } = useCartStore();
  const { products: shopProducts } = useProducts( { limit: '48' } );
  const { address } = useAddress();
  const products = getCartProducts( cartProducts, shopProducts.data?.data || [] );

  return (
    <section {...props}>
      <h2 className="mb-25 sm:mb-50 text-xl sm:text-2xl font-bold text-center">Checkout</h2>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
        {shopProducts.isLoading
          ?
          Array.from( { length: 9 } ).map( ( _, index ) => <div key={index} className="w-full h-25 bg-zinc-100 rounded-2xl animate-pulse"></div> )
          :
          products.map( product => <ProductCard key={product._id} product={product} controls={<><p className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200">{product.quantity}</p><p className="w-25 h-12.5 flex items-center justify-center border-l border-zinc-200">${( product.quantity || 1 ) * product.price}</p></>} /> )
        }
      </div>
      <div className="pt-8 sm:pt-12.5 flex items-center justify-between gap-8 sm:gap-15">
        <p>Quantity: {getQuantities()}, Total: ${mapCartPrices( cartProducts, shopProducts.data?.data || [] )}</p>
        {address.data?._id ? <CreateOrderForm /> : <Link to="/cart">Back</Link>}
      </div>
      <CreateAddressForm className="mt-8 sm:mt-12.5" />
    </section>
  );
};

export default CheckoutProductsGrid;