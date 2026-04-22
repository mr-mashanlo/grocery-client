import { ChevronsUpDown } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type TableHTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';

import { type Order } from '@/entities/order';

import Row from './row';

interface Props extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  orders: Array<Order>
}

const Table: FC<Props> = ( { orders, ...props } ) => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const setParams = ( params?: Record<string, string> ) => {
    setSearchParams( { ...Object.fromEntries( searchParams.entries() ), ...params } );
  };

  return (
    <table className="w-full min-w-200 text-left table-fixed" {...props}>
      <thead>
        <tr>
          <th className="w-13.5 h-13.5"></th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: '_id' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>ID</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'status' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Status</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'total' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Total</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'createdAt' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>CreatedAt</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map( order => <Row key={order._id} order={order} /> )}
      </tbody>
    </table>
  );
};

export default Table;