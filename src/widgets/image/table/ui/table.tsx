import { ChevronsUpDown } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type TableHTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';

import { type Image } from '@/entities/image';

import Row from './row';

interface Props extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  images: Array<Image>
}

const Table: FC<Props> = ( { images, ...props } ) => {
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
            <button onClick={() => setParams( { sort: 'path' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Path</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
          <th className="p-3">
            <button onClick={() => setParams( { sort: 'alt' } )} className="inline-flex items-center gap-1 cursor-pointer">
              <span>Alt</span>
              <ChevronsUpDown className="w-3 h-3" />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {images.map( image => <Row key={image._id} image={image} /> )}
      </tbody>
    </table>
  );
};

export default Table;