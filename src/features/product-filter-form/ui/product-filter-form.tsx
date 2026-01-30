import { Button, Field, Fieldset, Input, Label, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Check, ChevronDownIcon, Square } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type FormHTMLAttributes } from 'react';
import { useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { useCategories } from '@/entities/category';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  className?: string
}

const ProductFilterForm: FC<Props> = ( { className, ...others } ) => {
  const { categories } = useCategories( { limit: '0' } );
  const [ searchParams, setSearchParams ] = useSearchParams();

  return (
    <form className={twMerge( 'hidden sm:block',  className )} {...others}>

      <Fieldset className="flex sm:items-center gap-8 sm:gap-15 flex-col sm:flex-row">
        <Field className="w-full mr-auto flex items-center gap-2 relative">
          <Label className="sr-only">Search</Label>
          <Square aria-hidden="true" className="size-3 fill-zinc-200 stroke-zinc-200" />
          <Input name="search" placeholder="Search..." className="block w-full sm:w-80 outline-0 leading-none" />
        </Field>

        <Menu as="div" className="relative inline-block">
          <MenuButton className="flex items-center gap-2 cursor-pointer">
            <Square aria-hidden="true" data-active={Boolean( searchParams.get( 'category' ) )} className="size-3 fill-zinc-200 stroke-zinc-200 data-[active=true]:fill-black data-[active=true]:stroke-black" />
            Category
            <ChevronDownIcon aria-hidden="true" className="size-4 text-zinc-400" />
          </MenuButton>
          <MenuItems transition className="absolute right-0 z-10 mt-2 w-full sm:w-40 origin-top-right rounded-md bg-zinc-100 border border-zinc-200 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            {categories.data?.data.map( category => (
              <MenuItem key={category._id}>
                <Button onClick={() => setSearchParams( p => { p.set( 'category', category.slug ); p.delete( 'page' ); return p; } )} className="w-full px-4 py-2 text-left cursor-pointer flex items-center gap-3">
                  {category.title}
                  {searchParams.get( 'category' ) === category.slug && <Check aria-hidden="true" strokeWidth={3} className="size-3" />}
                </Button>
              </MenuItem>
            ) )}
            <MenuItem>
              <Button onClick={() => setSearchParams( p => { p.delete( 'category' ); p.delete( 'page' ); return p; } )} className="w-full px-4 py-2 border-t border-zinc-200 text-left text-red-500 cursor-pointer">
                Clear
              </Button>
            </MenuItem>
          </MenuItems>
        </Menu>

        <Menu as="div" className="relative inline-block">
          <MenuButton className="flex items-center gap-2 cursor-pointer">
            <Square aria-hidden="true" data-active={Boolean( searchParams.get( 'sort' ) )} className="size-3 fill-zinc-200 stroke-zinc-200 data-[active=true]:fill-black data-[active=true]:stroke-black" />
            Sort
            <ChevronDownIcon aria-hidden="true" className="size-4 text-zinc-400" />
          </MenuButton>
          <MenuItems transition className="absolute right-0 z-10 mt-2 w-full sm:w-40 origin-top-right rounded-md bg-zinc-100 border border-zinc-200 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            <MenuItem>
              <Button onClick={() => setSearchParams( p => { p.set( 'sort', 'title' ); p.delete( 'page' ); return p; } )} className="w-full px-4 py-2 text-left cursor-pointer flex items-center gap-3">
                Title
                {searchParams.get( 'sort' ) === 'title' && <Check aria-hidden="true" strokeWidth={3} className="size-3" />}
              </Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => setSearchParams( p => { p.set( 'sort', 'price' ); p.delete( 'page' ); return p; } )} className="w-full px-4 py-2 text-left cursor-pointer flex items-center gap-3">
                Price
                {searchParams.get( 'sort' ) === 'price' && <Check aria-hidden="true" strokeWidth={3} className="size-3" />}
              </Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => setSearchParams( p => { p.set( 'sort', 'stock' ); p.delete( 'page' ); return p; } )} className="w-full px-4 py-2 text-left cursor-pointer flex items-center gap-3">
                Stock
                {searchParams.get( 'sort' ) === 'stock' && <Check aria-hidden="true" strokeWidth={3} className="size-3" />}
              </Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => setSearchParams( p => { p.delete( 'sort' ); p.delete( 'page' ); return p; } )} className="w-full px-4 py-2 border-t border-zinc-200 text-left text-red-500 cursor-pointer">
                Clear
              </Button>
            </MenuItem>
          </MenuItems>
        </Menu>

        <Menu as="div" className="relative inline-block">
          <MenuButton className="flex items-center gap-2 cursor-pointer">
            <Square aria-hidden="true" data-active={Boolean( searchParams.get( 'order' ) )} className="size-3 fill-zinc-200 stroke-zinc-200 data-[active=true]:fill-black data-[active=true]:stroke-black" />
            Order
            <ChevronDownIcon aria-hidden="true" className="size-4 text-zinc-400" />
          </MenuButton>
          <MenuItems transition className="absolute right-0 z-10 mt-2 w-full sm:w-40 origin-top-right rounded-md bg-zinc-100 border border-zinc-200 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            <MenuItem>
              <Button onClick={() => setSearchParams( p => { p.set( 'order', 'asc' ); p.delete( 'page' ); return p; } )} className="w-full px-4 py-2 text-left cursor-pointer flex items-center gap-3">
                A-Z
                {searchParams.get( 'order' ) === 'asc' && <Check aria-hidden="true" strokeWidth={3} className="size-3" />}
              </Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => setSearchParams( p => { p.set( 'order', 'desc' ); p.delete( 'page' ); return p; } )} className="w-full px-4 py-2 text-left cursor-pointer flex items-center gap-3">
                Z-A
                {searchParams.get( 'order' ) === 'desc' && <Check aria-hidden="true" strokeWidth={3} className="size-3" />}
              </Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={() => setSearchParams( p => { p.delete( 'order' ); p.delete( 'page' ); return p; } )} className="w-full px-4 py-2 border-t border-zinc-200 text-left text-red-500 cursor-pointer">Clear</Button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </Fieldset>

    </form>
  );
};

export default ProductFilterForm;