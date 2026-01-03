import { type FC } from 'react';

export const HomePage: FC = () => {
  return (
    <>
      <title>Grocery</title>
      <meta property="og:title" content="Grocery" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />
    </>
  );
};

export default HomePage;