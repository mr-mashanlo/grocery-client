import { type FC } from 'react';

import { SignInForm } from '@/features/sign-in-form';

const SignInPage: FC = () => {
  return (
    <>
      <title>Sign in | Grocery</title>
      <meta property="og:title" content="Sign in | Grocery" />
      <meta name="description" content="Sign in to your Grocery account to manage orders and profile" />
      <meta property="og:description" content="Sign in to your Grocery account to manage orders and profile" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <section className="h-screen p-4 sm:p-15 flex justify-center items-center">
        <SignInForm />
      </section>
    </>
  );
};

export default SignInPage;