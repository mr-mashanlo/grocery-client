import { type DetailedHTMLProps, type FC, type TableHTMLAttributes } from 'react';

import { type Cart } from '@/entities/cart';

import Row from './row';

interface Props extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  products: Array<Cart>
}

const Table: FC<Props> = ( { products, ...props } ) => {
  return (
    <table className="w-full min-w-200 text-left table-fixed" {...props}>
      <thead>
        <tr>
          <th className="w-13.5 h-13.5"></th>
          <th className="w-13.5 h-13.5"></th>
          <th className="p-3"><span>Name</span></th>
          <th className="p-3"><span>Price</span></th>
          <th className="p-3"><span>Quantity</span></th>
          <th className="p-3"><span>Total</span></th>
        </tr>
      </thead>
      <tbody>
        {products.map( product => <Row key={product._id} product={product} /> )}
      </tbody>
    </table>
  );
};

export default Table;