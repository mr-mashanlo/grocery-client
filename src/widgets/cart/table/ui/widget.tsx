import { type FC } from 'react';
import { Link } from 'react-router';

import { useCartStore } from '@/entities/cart';

import Header from './header';
import Table from './table';

const CartTable: FC = () => {
  const products = useCartStore( state => state.products );
  const getTotalQuantity = useCartStore( state => state.getTotalQuantity );

  return (
    <section className="m-4 sm:m-10">
      <div className="border border-zinc-200 rounded-md">
        <div className="border-b border-zinc-200">
          <Header />
        </div>
        <div className="overflow-auto">
          <Table products={products || []} />
        </div>
      </div>
      {getTotalQuantity() ?
        <div className="mt-5 sm:mt-15 text-center">
          <Link to="/checkout" className="inline-block w-80 mx-auto p-4 rounded-xl bg-black text-white">Checkout</Link>
        </div> :
        null
      }
    </section>
  );
};

export default CartTable;