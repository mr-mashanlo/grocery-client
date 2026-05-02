import { type FC } from 'react';

import { CategoryGrid } from '@/widgets/category/grid';

export const CategoriesPage: FC = () => {
  return (
    <>
      <title>Categories | Grocery</title>
      <meta property="og:title" content="Categories | Grocery" />
      <meta name="description" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <main className="min-h-screen my-8 sm:my-20">
        <section className="mx-4 my-8 sm:mx-10 sm:my-20">
          <h1 className="mb-3 text-xl sm:text-2xl font-semibold">Categories</h1>
          <p className="max-w-2xl leading-[200%]">Accusantium iusto impedit asperiores ab atque? Temporibus quod error maiores adipisci quam dolores corrupti placeat, ducimus, cupiditate iste illo dolorum.</p>
        </section>
        <CategoryGrid />
      </main>
    </>
  );
};

export default CategoriesPage;