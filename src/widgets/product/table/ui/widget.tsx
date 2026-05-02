import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { useProducts } from '@/entities/product';

import Header from './header';
import Pagination from './pagination';
import Table from './table';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const ProductTable: FC<Props> = ( { className, ...props } ) => {
  const [ searchParams ] = useSearchParams();
  const { products } = useProducts( Object.fromEntries( searchParams.entries() ) );

  return (
    <section className={twMerge( 'm-4 sm:m-10', className )} {...props}>
      <div className="border border-zinc-200 rounded-md">
        <div className="border-b border-zinc-200">
          <Header />
        </div>
        <div className="overflow-auto">
          <Table products={products.data?.data || []} />
        </div>
        <div className="border-t border-zinc-200">
          <Pagination limit={products.data?.limit || 1} page={products.data?.page || 1} total={products.data?.total || 0} />
        </div>
      </div>
    </section>
  );
};

export default ProductTable;