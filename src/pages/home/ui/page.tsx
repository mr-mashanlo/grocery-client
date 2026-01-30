import { type FC } from 'react';

import { Header } from '@/widgets/header';
import { ProductsGrid } from '@/widgets/products-grid';

export const HomePage: FC = () => {
  return (
    <>
      <title>Grocery - Online Grocery Shopping</title>
      <meta property="og:title" content="Grocery - Online Grocery Shopping" />
      <meta name="description" content="Order fresh groceries online with fast delivery and great prices" />
      <meta property="og:description" content="Order fresh groceries online with fast delivery and great prices" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-8 sm:px-25 sm:py-12.5">
        <Header />
        <ProductsGrid className="mt-25 sm:mt-50" />
      </div>
    </>
  );
};

export default HomePage;