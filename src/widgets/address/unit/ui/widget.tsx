import { ArrowUpRight } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

import { useMyAddress } from '@/entities/address';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

const AddressUnit: FC<Props> = ( { className, ...props } ) => {
  const { address } = useMyAddress();

  return (
    <section className={twMerge( 'mx-4 my-8 sm:mx-10 sm:my-20', className )} {...props}>
      {address.data ?
        <p className="max-w-2xl leading-[200%]">{address.data?.city}, {address.data?.address}, {address.data?.phone}. <Link to="/address/update" className="font-bold decoration-[.1rem] hover:underline">Update<ArrowUpRight className="inline w-3 h-3" /></Link></p> :
        <p><Link to="/address/create" className="font-bold decoration-[.1rem] hover:underline">Create<ArrowUpRight className="inline w-3 h-3" /></Link></p>
      }
    </section>
  );
};

export default AddressUnit;