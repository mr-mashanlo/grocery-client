import { type FC } from 'react';

import { ShopControls } from '@/features/shop-controls';
import { ShopProducts } from '@/widgets/shop-products';

export const HomePage: FC = () => {
  return (
    <>
      <title>Grocery</title>
      <meta property="og:title" content="Grocery" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-10 pb-19 sm:p-37.5">
        <ShopProducts />
        <ShopControls />
      </div>
    </>
  );
};

export default HomePage;