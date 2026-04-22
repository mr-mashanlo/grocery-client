import { ArrowUpRight } from 'lucide-react';
import { type FC } from 'react';
import { Link } from 'react-router';

import { useMyAddress } from '@/entities/address';

const AddressUnit: FC = () => {
  const { address } = useMyAddress();

  return (
    <section className="mx-4 my-8 sm:mx-10 sm:my-20">
      {address.data ?
        <p className="max-w-2xl leading-[200%]">{address.data?.city}, {address.data?.address}, {address.data?.phone}. <Link to="/address/update" className="font-bold decoration-[.1rem] hover:underline">Update<ArrowUpRight className="inline w-3 h-3" /></Link></p> :
        <p><Link to="/address/create" className="font-bold decoration-[.1rem] hover:underline">Create<ArrowUpRight className="inline w-3 h-3" /></Link></p>
      }
    </section>
  );
};

export default AddressUnit;