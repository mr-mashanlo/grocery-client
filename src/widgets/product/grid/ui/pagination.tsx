import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    <div className="py-6 flex items-center justify-between border-b border-zinc-200">
      <div className="flex items-center gap-6 sm:gap-12">
        {Array.from( { length: pages } ).map( ( _, index ) => (
          <a key={index} onClick={() => setParams( { page: String( index + 1 ) } )} className="cursor-pointer">{index + 1}</a>
        ) )}
      </div>
      <div className="flex items-center gap-6 sm:gap-12">
        {page > 1 ? <a onClick={() => setParams( { page: String( page - 1 ) } )} className="flex items-center gap-1 cursor-pointer"><ChevronLeft className="w-3 h-3" /> <span>Prev</span></a> : null}
        {page < pages ? <a onClick={() => setParams( { page: String( page + 1 ) } )} className="flex items-center gap-1 cursor-pointer"><span>Next</span> <ChevronRight className="w-3 h-3" /></a> : null}
      </div>
    </div>
  );
};

export default Pagination;