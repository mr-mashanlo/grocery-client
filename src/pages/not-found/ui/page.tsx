import { type FC } from 'react';
import { Link } from 'react-router';

const NotFoundPage: FC = () => {
  return (
    <>
      <title>Page not found | Grocery</title>
      <meta property="og:title" content="Page not found | Grocery" />
      <meta name="description" content="The page you are looking for doesn't exist or has been moved" />
      <meta property="og:description" content="The page you are looking for doesn't exist or has been moved" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <div className="min-h-screen p-4 sm:p-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold">Page 404</h1>
          <p className="mt-5">The resource requested could not be found on this server. <Link to="/" className="font-bold decoration-[.1rem] hover:underline">Go to home page</Link></p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;