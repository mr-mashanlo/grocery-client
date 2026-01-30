import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { useParams } from 'react-router';

import { useOrder } from '@/entities/order';
import { ProductCard } from '@/entities/product';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const SingleOrder: FC<Props> = ( props ) => {
  const { id } = useParams();
  const { order } = useOrder( id || '' );

  return (
    <section {...props}>
      <h2 className="mb-25 sm:mb-50 text-xl sm:text-2xl font-bold text-center">Order #{order.data?._id.slice( -6 )}</h2>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-7.5">
        {order.isLoading
          ?
          Array.from( { length: 9 } ).map( ( _, index ) => <div key={index} className="w-full h-25 bg-zinc-100 rounded-2xl animate-pulse"></div> )
          :
          order.data?.products.map( product => <ProductCard key={product.product._id} product={product.product} controls={<><p className="w-12.5 h-12.5 flex items-center justify-center border-l border-zinc-200">{product.quantity}</p><p className="w-25 h-12.5 flex items-center justify-center border-l border-zinc-200">${( product.quantity || 1 ) * product.price}</p></>} /> )
        }
      </div>
      <div className="mt-8 sm:mt-12.5 rounded-xl border border-zinc-200">
        <table className="w-full text-left table-fixed">
          <thead>
            <tr>
              <th scope="col" className="p-5 font-medium bg-zinc-100 rounded-tl-xl">Key</th>
              <th scope="col" className="p-5 font-medium bg-zinc-100 rounded-tr-xl">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-zinc-200">
              <th scope="row" className="p-5 font-medium whitespace-nowrap">Created at</th>
              <td className="p-5">{order.data?.createdAt}</td>
            </tr>
            <tr className="border-t border-zinc-200">
              <th scope="row" className="p-5 font-medium whitespace-nowrap">Status</th>
              <td className="p-5">{order.data?.status}</td>
            </tr>
            <tr className="border-t border-zinc-200">
              <th scope="row" className="p-5 font-medium whitespace-nowrap">Quantity</th>
              <td className="p-5">{order.data?.totalQuantity} items</td>
            </tr>
            <tr className="border-t border-zinc-200">
              <th scope="row" className="p-5 font-medium whitespace-nowrap">Price</th>
              <td className="p-5">${order.data?.totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SingleOrder;