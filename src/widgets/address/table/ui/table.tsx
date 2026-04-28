import { ChevronsUpDown } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type TableHTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';

import { type Address } from '@/entities/address';

import Row from './row';

interface Props extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  addresses: Array<Address>
}

const Table: FC<Props> = ( { addresses, ...props } ) => {
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
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'user' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>User</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'city' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>City</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'address' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Address</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'phone' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Phone</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {addresses.map( address => <Row key={address._id} address={address} /> )}
      </tbody>
    </table>
  );
};

export default Table;