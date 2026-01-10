import { type FC } from 'react';
import { Link } from 'react-router';

const NotFoundPage: FC = () => {
  return (
    <>
      <title>Page not found</title>
      <meta property="og:title" content="Page not found" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="px-4 py-10 pb-19 sm:p-37.5">
        <h1 className="mb-8 text-4xl font-bold">Page 404</h1>
        <p>The resource requested could not be found on this server. <Link to="/" className="font-bold decoration-[.1rem] hover:underline">Go to home page</Link></p>
      </div>
    </>
  );
};

export default NotFoundPage;