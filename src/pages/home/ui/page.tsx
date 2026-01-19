import { type FC } from 'react';
import { Link } from 'react-router';

import { UpdateCategoryForm } from '@/features/update-category-form';
import { PageControls } from '@/shared/ui';
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
        <PageControls form={<UpdateCategoryForm className="w-full" />} button={<Link to="/cart" className="block w-full p-5 bg-black text-white text-center">Cart</Link>} />
      </div>
    </>
  );
};

export default HomePage;