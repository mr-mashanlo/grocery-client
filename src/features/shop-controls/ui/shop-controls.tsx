import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { type FC } from 'react';
import { Link } from 'react-router';

import { useCartStore } from '@/entities/cart';
import { useCategories } from '@/entities/category';
import { useFilterStore } from '@/entities/product';

const ShopControls: FC = () => {
  const { getQuantities } = useCartStore();
  const { categories } = useCategories( { limit: '0' } );
  const { category, setCategory } = useFilterStore();

  return (
    <div className="fixed bottom-0 left-0 flex items-center">
      <Listbox value={category} onChange={setCategory}>
        <ListboxButton className="block w-55 sm:w-70 p-5 text-left bg-zinc-100 cursor-pointer outline-0">
          {category.title}
        </ListboxButton>
        <ListboxOptions anchor="top" transition className="w-(--button-width) p-5 flex flex-col gap-5 bg-zinc-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-0">
          <ListboxOption value={{ _id: '', title: 'All products', slug: 'all' }} className="group flex items-center gap-2 cursor-pointer">All products</ListboxOption>
          {categories.data?.data.map( category => <ListboxOption key={category._id} value={category} className="group flex items-center gap-2 cursor-pointer">{category.title}</ListboxOption> )}
        </ListboxOptions>
      </Listbox>
      <Link to="/cart" className="w-40 sm:w-50 p-5 text-center bg-zinc-200 cursor-pointer">Cart ({getQuantities()})</Link>
    </div>
  );
};

export default ShopControls;