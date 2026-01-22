import { type FC } from 'react';
import { Link } from 'react-router';

import { FilterForm } from '@/features/filter-form';
import { ShopProducts } from '@/widgets/shop-products';

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

      <div className="px-4 py-10 pb-19 sm:p-37.5">
        <ShopProducts />
        <div className="flex items-center fixed bottom-0 left-0">
          <div className="w-180 h-15"><FilterForm /></div>
          <div className="w-45 h-15"><Link to="/cart" className="block w-full p-5 bg-black text-white text-center">Cart</Link></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;