import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { type DetailedHTMLProps, type FC, type FormHTMLAttributes } from 'react';

import { useCategories } from '@/entities/category';
import { useFilterStore } from '@/entities/product';

type Props = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

const UpdateCategoryForm: FC<Props> = ( props ) => {
  const { categories } = useCategories();
  const { category, setCategory } = useFilterStore();

  return (
    <form {...props}>
      <Listbox value={category} onChange={setCategory}>
        <ListboxButton className="w-full p-5 text-left bg-zinc-100 cursor-pointer outline-0">{category.title}</ListboxButton>
        <ListboxOptions anchor="top" transition className="w-(--button-width) p-5 flex flex-col gap-5 bg-zinc-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-0">
          <ListboxOption value={{ _id: '', title: 'All products', slug: 'all' }} className="group flex items-center gap-2 cursor-pointer">All products</ListboxOption>
          {categories.data?.map( category => <ListboxOption key={category._id} value={category} className="group flex items-center gap-2 cursor-pointer">{category.title}</ListboxOption> )}
        </ListboxOptions>
      </Listbox>
    </form>
  );
};

export default UpdateCategoryForm;