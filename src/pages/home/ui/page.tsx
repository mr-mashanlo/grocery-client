import { type FC } from 'react';

import { ShopControls } from '@/features/shop-controls';
import { Products } from '@/widgets/products';

export const HomePage: FC = () => {
  return (
    <>
      <title>Grocery</title>
      <meta property="og:title" content="Grocery" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="p-3 sm:p-15">
        <Products />
        <ShopControls />
      </div>
    </>
  );
};

export default HomePage;