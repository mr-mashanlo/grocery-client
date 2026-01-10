import { type FC } from 'react';

import { SignUpForm } from '@/features/sign-up-form';

const SignUpPage: FC = () => {
  return (
    <>
      <title>Sign up | Grocery</title>
      <meta property="og:title" content="Sign up | Grocery" />
      <meta name="description" content="Create a Grocery account and start shopping for groceries online" />
      <meta property="og:description" content="Create a Grocery account and start shopping for groceries online" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <section className="h-screen p-4 sm:p-15 flex justify-center items-center">
        <SignUpForm />
      </section>
    </>
  );
};

export default SignUpPage;