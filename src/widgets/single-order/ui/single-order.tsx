import { type FC } from 'react';
import { useParams } from 'react-router';

import { getOrderProducts, useOrder } from '@/entities/order';
import { ProductCard, useProducts } from '@/entities/product';

const SingleOrder: FC = () => {
  const { id } = useParams();
  const { order } = useOrder( id || '' );
  const { products: shopProducts } = useProducts( { limit: '48' } );

  if ( !order.data ) return null;

  const products = getOrderProducts( order.data, shopProducts.data || [] );

  return (
    <section>
      <h2 className="mb-8 sm:mb-15 text-4xl font-bold">Order #{order.data?._id.slice( -6 )}</h2>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
        {products.map( product => <ProductCard key={product._id} product={product} quantity={product.quantity || 0} /> )}
      </div>
      <div className="mt-8 sm:mt-15 grid sm:grid-cols-2 gap-8 sm:gap-15">
        <ul className=" grid gap-5">
          <li>UID: {order.data._id}</li>
          <li>Date: {order.data.createdAt}</li>
          <li>Status: {order.data.status}</li>
          <li>Quantity: {order.data.totalQuantity} items</li>
          <li>Total: ${order.data.totalPrice}</li>
        </ul>
        <ul className="grid gap-5">
          <li>Region: {order.data.address.region}</li>
          <li>City: {order.data.address.city}</li>
          <li>Street: {order.data.address.street}</li>
          <li>Address: {order.data.address.address}</li>
          <li>Phone: {order.data.address.phone}</li>
        </ul>
      </div>
    </section>
  );
};

export default SingleOrder;