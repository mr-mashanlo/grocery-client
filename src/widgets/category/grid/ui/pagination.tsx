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
    <div className="mt-6 sm:mt-10 flex items-center justify-between gap-5 sm:gap-15">
      <div className="flex items-center gap-15">
        {Array.from( { length: pages } ).map( ( _, index ) => (
          <a key={index} onClick={() => setParams( { page: String( index + 1 ) } )} className="cursor-pointer">{index + 1}</a>
        ) )}
      </div>
      <div className="flex items-center gap-15">
        {page > 1 ? <a onClick={() => setParams( { page: String( page - 1 ) } )} className="cursor-pointer">Prev</a> : null}
        {page < pages ? <a onClick={() => setParams( { page: String( page + 1 ) } )} className="cursor-pointer">Next</a> : null}
      </div>
    </div>
  );
};

export default Pagination;