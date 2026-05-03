import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Link, useSearchParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { useCategories } from '@/entities/category';

import Header from './header';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const CategoryGrid: FC<Props> = ( { className, ...props } ) => {
  const [ searchParams ] = useSearchParams();
  const { categories } = useCategories( { archived: 'false', ...Object.fromEntries( searchParams.entries() ) } );

  return (
    <section className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20', className )} {...props}>
      <Header />
      <ul className="grid sm:grid-cols-3 gap-4 sm:gap-5">
        {categories.data?.data.map( category =>
          <li key={category._id} className="relative">
            <Link to={`/products?category=${category.slug}`}><img src={category.image.url} alt={category.image.alt} className="rounded-xl" /></Link>
            <h3 className="absolute bottom-5 left-5">{category.name}</h3>
          </li>
        )}
      </ul>
    </section>
  );
};

export default CategoryGrid;