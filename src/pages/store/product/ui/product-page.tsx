import { type FC } from 'react';

import { ProductUnit } from '@/widgets/product/unit';

export const ProductPage: FC = () => {
  return (
    <>
      <title>Grocery - Online Grocery Shopping</title>
      <meta property="og:title" content="" />
      <meta name="description" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <main className="min-h-screen my-8 sm:my-20">
        <ProductUnit />
      </main>
    </>
  );
};

export default ProductPage;