import { Button } from '@headlessui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string,
  total: number,
  limit: number,
  page: number
}

const ProductPagination: FC<Props> = ( { className, total, limit, page, ...others } ) => {
  const [ , setSearchParams ] = useSearchParams();

  const handlePrevButtonClick = () => {
    setSearchParams( searchParam => {
      const currentPage = page <= 1 ? page : page - 1;
      searchParam.set( 'page', String( currentPage ) );
      return searchParam;
    } );
  };

  const handleNextButtonClick = () => {
    setSearchParams( searchParam => {
      const currentPage = page >= Math.ceil( total / limit ) ? page : page + 1;
      searchParam.set( 'page', String( currentPage ) );
      return searchParam;
    } );
  };

  return (
    <nav className={twMerge( 'flex items-center gap-6 sm:gap-15 flex-col sm:flex-row-reverse', className )} {...others}>
      <ul className="sm:ml-auto flex items-center gap-15">
        <li>
          <Button onClick={handlePrevButtonClick} disabled={page <= 1} className="flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-default">
            <ChevronLeft aria-hidden="true" strokeWidth={3} className="size-3" />
            Prev
          </Button>
        </li>
        <li>
          <Button onClick={handleNextButtonClick} disabled={page >= Math.ceil( total / limit )} className="flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-default">
            Next
            <ChevronRight aria-hidden="true" strokeWidth={3} className="size-3" />
          </Button>
        </li>
      </ul>
      <span>Showing {page}-{limit} of {total}</span>
    </nav>
  );
};

export default ProductPagination;