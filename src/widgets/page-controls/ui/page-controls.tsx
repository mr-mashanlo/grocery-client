import { type FC, type ReactNode } from 'react';

import { useCartStore } from '@/entities/cart';
import { useProducts } from '@/entities/product';

interface Props {
  controls: ReactNode
}

const PageControls: FC<Props> = ( { controls } ) => {
  const { products: cartProducts, getQuantities } = useCartStore();
  const { products: shopProducts } = useProducts( { limit: '0' } );

  const total = cartProducts.reduce( ( acc, cartProduct ) => {
    const shopProduct = shopProducts.data?.data.find( shopProduct => cartProduct.product === shopProduct._id );
    return acc = acc + cartProduct.quantity * ( shopProduct?.price || 0 );
  }, 0 );

  return (
    <div className="w-full sm:w-150 grid grid-cols-4 items-center fixed bottom-0 left-0">
      <p className="p-5 col-span-3 sm:col-span-2 text-left bg-zinc-100">Total: ${total}, Qty: {getQuantities()}</p>
      {controls}
    </div>
  );
};

export default PageControls;