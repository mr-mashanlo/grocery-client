import { type FC } from 'react';
import { useSearchParams } from 'react-router';

import { useCategories } from '@/entities/category';

import Header from './header';
import Pagination from './pagination';
import Table from './table';

const CategoryTable: FC = () => {
  const [ searchParams ] = useSearchParams();
  const { categories } = useCategories( Object.fromEntries( searchParams.entries() ) );

  return (
    <section className="m-4 sm:m-10">
      <div className="border border-zinc-200 rounded-md">
        <div className="border-b border-zinc-200">
          <Header />
        </div>
        <div className="overflow-auto">
          <Table categories={categories.data?.data || []} />
        </div>
        <div className="border-t border-zinc-200">
          <Pagination limit={categories.data?.limit || 1} page={categories.data?.page || 1} total={categories.data?.total || 0} />
        </div>
      </div>
    </section>
  );
};

export default CategoryTable;