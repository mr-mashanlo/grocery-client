import { type FC } from 'react';

import { AddressUnit } from '@/widgets/address/unit';

const AddressPage: FC = () => {
  return (
    <>
      <title>Address | Grocery</title>
      <meta property="og:title" content="Address | Grocery" />
      <meta name="description" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Grocery" />
      <meta property="twitter:card" content="summary" />

      <main className="min-h-screen my-8 sm:my-20">
        <section className="mx-4 my-8 sm:mx-10 sm:my-20">
          <h1 className="mb-3 text-xl sm:text-2xl font-semibold">My address</h1>
          <p className="max-w-2xl leading-[200%]">Ex, voluptas, adipisci corporis cumque dicta deserunt totam molestiae eligendi, quibusdam magni eius hic ad doloremque sunt. Mollitia, eaque amet.</p>
        </section>
        <AddressUnit />
      </main>
    </>
  );
};

export default AddressPage;