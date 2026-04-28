import { ChevronsUpDown } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type TableHTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';

import { type Product } from '@/entities/product';

import Row from './row';

interface Props extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  products: Array<Product>
}

const Table: FC<Props> = ( { products, ...props } ) => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const setParams = ( params?: Record<string, string> ) => {
    if ( !params ) return;

    if ( searchParams.get( 'sort' ) === params.sort ) {
      const updatedParams = { ...params, sort: searchParams.get( 'sort' ) || '', order: searchParams.get( 'order' ) === 'desc' ? 'asc' : 'desc' };
      setSearchParams( { ...Object.fromEntries( searchParams.entries() ), ...updatedParams } );
    } else {
      const updatedParams = { ...params, sort: params.sort, order: 'asc' };
      setSearchParams( { ...Object.fromEntries( searchParams.entries() ), ...updatedParams } );
    }
  };

  return (
    <table className="w-full min-w-200 text-left table-fixed" {...props}>
      <thead>
        <tr>
          <th className="w-13.5 h-13.5"></th>
          <th className="w-13.5 h-13.5"></th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'name' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Name</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'price' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Price</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'category' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Category</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'archived' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Archived</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map( product => <Row key={product._id} product={product} /> )}
      </tbody>
    </table>
  );
};

export default Table;