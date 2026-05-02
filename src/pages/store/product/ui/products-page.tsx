import { type FC } from 'react';

import { ProductGrid } from '@/widgets/product/grid';

export const ProductsPage: FC = () => {
  return (
    <>
      <title>Grocery - Online Grocery Shopping</title>
      <meta property="og:title" content="Grocery - Online Grocery Shopping" />
      <meta name="description" content="Order fresh groceries online with fast delivery and great prices" />
      <meta property="og:description" content="Order fresh groceries online with fast delivery and great prices" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <main className="min-h-screen my-8 sm:my-20">
        <section className="mx-4 my-8 sm:mx-10 sm:my-20">
          <h1 className="mb-3 text-xl sm:text-2xl font-semibold">Workspace sale</h1>
          <p className="max-w-2xl leading-[200%]">At tempore commodi quibusdam sed ea veritatis temporibus accusantium qui corporis obcaecati aperiam, eveniet, quisquam recusandae magni ducimus error possimus.</p>
        </section>
        <ProductGrid />
        <section className="mx-4 my-8 sm:mx-10 sm:my-20">
          <p className="max-w-2xl mx-auto text-center leading-[200%]">Qui mollitia accusamus praesentium perferendis, neque amet et pariatur ratione velit natus sapiente. Commodi sequi itaque, voluptate voluptas provident architecto</p>
        </section>
      </main>
    </>
  );
};

export default ProductsPage;