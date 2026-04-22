import { type FC } from 'react';
import { useSearchParams } from 'react-router';

import { useAddresses } from '@/entities/address';

import Header from './header';
import Pagination from './pagination';
import Table from './table';

const AddressTable: FC = () => {
  const [ searchParams ] = useSearchParams();
  const { addresses } = useAddresses( Object.fromEntries( searchParams.entries() ) );

  return (
    <section className="m-4 sm:m-10">
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