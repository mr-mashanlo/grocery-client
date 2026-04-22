import { type FC } from 'react';
import { useSearchParams } from 'react-router';

import { useImages } from '@/entities/image';

import Header from './header';
import Pagination from './pagination';
import Table from './table';

const ImageTable: FC = () => {
  const [ searchParams ] = useSearchParams();
  const { images } = useImages( Object.fromEntries( searchParams.entries() ) );

  return (
    <section className="m-4 sm:m-10">
      <div className="border border-zinc-200 rounded-md">
        <div className="border-b border-zinc-200">
          <Header />
        </div>
        <div className="overflow-auto">
          <Table images={images.data?.data || []} />
        </div>
        <div className="border-t border-zinc-200">
          <Pagination limit={images.data?.limit || 1} page={images.data?.page || 1} total={images.data?.total || 0} />
        </div>
      </div>
    </section>
  );
};

export default ImageTable;