import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { type FC } from 'react';
import { useSearchParams } from 'react-router';

const Header: FC = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const setParams = ( params?: Record<string, string> ) => {
    setSearchParams( { ...Object.fromEntries( searchParams.entries() ), ...params } );
  };

  return (
    <div className="py-6 flex items-center justify-between border-t border-zinc-200">
      <Listbox onChange={setParams}>
        <ListboxButton className="flex items-center gap-1"><span>Sort</span> <ChevronDown className="w-3 h-3" /></ListboxButton>
        <ListboxOptions anchor="bottom start" className="w-40 p-1 bg-white rounded shadow-md shadow-zinc-200">
          <ListboxOption value={{ sort: 'name', order: 'asc' }} className="p-1 rounded cursor-pointer data-focus:bg-zinc-100">Name: ASC</ListboxOption>
          <ListboxOption value={{ sort: 'name', order: 'desc' }} className="p-1 rounded cursor-pointer data-focus:bg-zinc-100">Name: DESC</ListboxOption>
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default Header;