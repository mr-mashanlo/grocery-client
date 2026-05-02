import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { useAddresses } from '@/entities/address';

import Header from './header';
import Pagination from './pagination';
import Table from './table';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const AddressTable: FC<Props> = ( { className, ...props } ) => {
  const [ searchParams ] = useSearchParams();
  const { addresses } = useAddresses( Object.fromEntries( searchParams.entries() ) );

  return (
    <section className={twMerge( 'm-4 sm:m-10', className )} {...props}>
      <div className="border border-zinc-200 rounded-md">
        <div className="border-b border-zinc-200">
          <Header />
        </div>
        <div className="overflow-auto">
          <Table addresses={addresses.data?.data || []} />
        </div>
        <div className="border-t border-zinc-200">
          <Pagination limit={addresses.data?.limit || 1} page={addresses.data?.page || 1} total={addresses.data?.total || 0} />
        </div>
      </div>
    </section>
  );
};

export default AddressTable;