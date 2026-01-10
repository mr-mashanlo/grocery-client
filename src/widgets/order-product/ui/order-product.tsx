import { type FC } from 'react';
import { useParams } from 'react-router';

import { getOrderProducts, useOrder } from '@/entities/order';
import { ProductCard, useProducts } from '@/entities/product';

const OrderProduct: FC = () => {
  const { id } = useParams();
  const { order } = useOrder( id || '' );
  const { products: shopProducts } = useProducts( { limit: '0', archived: 'false' } );

  if ( !order.data ) return null;

  const products = getOrderProducts( order.data, shopProducts.data?.data || [] );

  return (
    <section>
      <h2 className="mb-8 sm:mb-15 text-4xl font-bold">Order: {order.data?._id.slice( -6 )}</h2>
      <div className="grid grid-cols-3 gap-4 sm:gap-7.5">
        {products.map( product => <ProductCard key={product._id} product={product} quantity={product.quantity?.quantity || 99} /> )}
      </div>
      <ul className="mt-8 sm:mt-15 grid gap-5">
        <li>Date: {order.data.createdAt}</li>
        <li>Status: {order.data?.status}</li>
        <li>Quantity: {order.data.totalQuantity}</li>
        <li>Total: {order.data.totalPrice}</li>
      </ul>
    </section>
  );
};

export default OrderProduct;