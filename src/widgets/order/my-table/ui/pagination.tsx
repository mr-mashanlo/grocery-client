import { type FC } from 'react';
import { useSearchParams } from 'react-router';

interface Props {
  limit: number,
  page: number,
  total: number
}

const Pagination: FC<Props> = ( { limit, page, total } ) => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const pages = total > limit ? Math.ceil( total / limit ) : 1;

  const setParams = ( params?: Record<string, string> ) => {
    setSearchParams( { ...Object.fromEntries( searchParams.entries() ), ...params } );
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="p-3 flex items-center gap-3">
        {Array.from( { length: pages } ).map( ( _, index ) => (
          <a key={index} onClick={() => setParams( { page: String( index + 1 ) } )} className="w-7.5 h-7.5 flex items-center justify-center text-center bg-zinc-100 rounded-md cursor-pointer">{index + 1}</a>
        ) )}
      </div>
      <div className="p-3 flex items-center gap-3">
        {page > 1 ? <a onClick={() => setParams( { page: String( page - 1 ) } )} className="pagination-button h-7.5 px-3 py-1.5 bg-zinc-100 rounded-md cursor-pointer">Prev</a> : null}
        {page < pages ? <a onClick={() => setParams( { page: String( page + 1 ) } )} className="pagination-button h-7.5 px-3 py-1.5 bg-zinc-100 rounded-md cursor-pointer">Next</a> : null}
      </div>
    </div>
  );
};

export default Pagination;