import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Link, useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { type PaginatedCategory, useCategories } from '@/entities/category';

import Header from './header';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  categories?: PaginatedCategory
}

const Skeleton: FC<Props> = ( { className, ...props } ) => {
  return (
    <section className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20', className )} {...props}>
      <Header />
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {Array.from( { length: 6 } ).map( ( _, index ) => <li key={index} className="w-full aspect-square bg-zinc-100 rounded-xl"></li> )}
      </ul>
    </section>
  );
};

const Widget: FC<Props> = ( { className, categories, ...props } ) => {
  return (
    <section className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20', className )} {...props}>
      <Header />
      <ul className="grid sm:grid-cols-3 gap-4 sm:gap-5">
        {categories?.data.map( category =>
          <li key={category._id} className="relative">
            <Link to={`/products?category=${category.slug}`}><img src={category.image.url} alt={category.image.alt} className="rounded-xl" /></Link>
            <h3 className="absolute bottom-5 left-5">{category.name}</h3>
          </li>
        )}
      </ul>
    </section>
  );
};

const CategoryGrid: FC<Props> = () => {
  const [ searchParams ] = useSearchParams();
  const { categories } = useCategories( { archived: 'false', ...Object.fromEntries( searchParams.entries() ) } );
  return categories.isLoading ? <Skeleton /> : <Widget categories={categories.data} />;
};

export default CategoryGrid;