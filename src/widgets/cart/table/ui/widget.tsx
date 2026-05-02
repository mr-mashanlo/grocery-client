import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { useCartStore } from '@/entities/cart';

import Header from './header';
import Table from './table';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const CartTable: FC<Props> = ( { className, ...props } ) => {
  const products = useCartStore( state => state.products );
  const getTotalQuantity = useCartStore( state => state.getTotalQuantity );

  return (
    <section className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20', className )} {...props}>
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