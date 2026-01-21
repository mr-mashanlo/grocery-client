import { Button, Fieldset, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { type DetailedHTMLProps, type FC, type FormHTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';

import { CloseIcon } from '@/shared/icons';

type Props = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

const sortLibrary = {
  title: 'Title',
  price: 'Price',
  createdAt: 'CreatedAt'
};

const orderLibrary = {
  asc: 'A-Z',
  desc: 'Z-A'
};

const FilterForm: FC<Props> = ( props ) => {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const sort = searchParams.get( 'sort' ) as 'title' | 'price' | 'createdAt';
  const order = searchParams.get( 'order' ) as 'asc' | 'desc';

  const handleSortChange = ( value: string ) => {
    setSearchParams( searchParams => { searchParams.set( 'sort', value ); return searchParams; } );
  };

  const handleSortDelete = () => {
    setSearchParams( searchParams => { searchParams.delete( 'sort' ); return searchParams; } );
  };

  const handleOrderChange = ( value: string ) => {
    setSearchParams( searchParams => { searchParams.set( 'order', value ); return searchParams; } );
  };

  const handleOrderDelete = () => {
    setSearchParams( searchParams => { searchParams.delete( 'order' ); return searchParams; } );
  };

  return (
    <form className="h-full grid grid-cols-2 items-center" {...props}>
      <Fieldset className="relative">
        <Listbox value={sort} onChange={value => handleSortChange( value || '' )}>
          <ListboxButton className="w-full p-5 text-left bg-zinc-200 cursor-pointer outline-0">{sortLibrary[sort] || 'Sort'}</ListboxButton>
          <ListboxOptions anchor="top" transition className="w-(--button-width) p-5 flex flex-col gap-5 bg-zinc-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-0">
            <ListboxOption value="title" className="group flex items-center gap-2 cursor-pointer">Title</ListboxOption>
            <ListboxOption value="price" className="group flex items-center gap-2 cursor-pointer">Price</ListboxOption>
            <ListboxOption value="createdAt" className="group flex items-center gap-2 cursor-pointer">CreatedAt</ListboxOption>
          </ListboxOptions>
          {sort && <Button onClick={() => handleSortDelete()} className="w-4 h-4 flex items-center justify-center absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"><CloseIcon className="w-3 h-3 fill-black stroke-1 stroke-black" /></Button>}
        </Listbox>
      </Fieldset>

      <Fieldset className="relative">
        <Listbox value={order} onChange={value => handleOrderChange( value || '' )}>
          <ListboxButton className="w-full p-5 text-left bg-zinc-300 cursor-pointer outline-0">{orderLibrary[order] || 'Order'}</ListboxButton>
          <ListboxOptions anchor="top" transition className="w-(--button-width) p-5 flex flex-col gap-5 bg-zinc-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-0">
            <ListboxOption value="asc" className="group flex items-center gap-2 cursor-pointer">A-Z</ListboxOption>
            <ListboxOption value="desc" className="group flex items-center gap-2 cursor-pointer">Z-A</ListboxOption>
          </ListboxOptions>
        </Listbox>
        {order && <Button onClick={() => handleOrderDelete()} className="w-4 h-4 flex items-center justify-center absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"><CloseIcon className="w-3 h-3 fill-black stroke-1 stroke-black" /></Button>}
      </Fieldset>
    </form>
  );
};

export default FilterForm;