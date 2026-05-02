import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { useCartStore } from '@/entities/cart';
import { CreateOrderForm } from '@/features/order/create-order-form';

import Header from './header';
import Table from './table';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const CheckoutTable: FC<Props> = ( { className, ...props } ) => {
  const products = useCartStore( state => state.products );
  const getTotalQuantity = useCartStore( state => state.getTotalQuantity );
  const getTotalPrice = useCartStore( state => state.getTotalPrice );

  return (
    <section className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20', className )} {...props}>
      <div className="border border-zinc-200 rounded-md">
        <div className="border-b border-zinc-200">
          <Header />
        </div>
        <div className="overflow-auto">
          <Table products={products || []} quantity={getTotalQuantity()} total={getTotalPrice()} />
        </div>
      </div>
      {getTotalQuantity() ?
        <div className="mt-5 sm:mt-15">
          <CreateOrderForm className="mx-auto" />
        </div> :
        null
      }
    </section>
  );
};

export default CheckoutTable;