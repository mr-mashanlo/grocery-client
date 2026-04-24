import { Button } from '@headlessui/react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { type Product } from '@/entities/product';

import { useArchiveProductForm } from '../model/hook';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  product: Product,
  className?: string
};

const ArchiveProductForm: FC<Props> = ( { product, className, ...props } ) => {
  const form = useArchiveProductForm( product );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} className={twMerge( 'w-full sm:w-80 relative', className )} {...props}>
      <h3 className="mb-5 text-xl text-center font-bold">{product.archived ? 'Unarchive' : 'Archive'} product</h3>
      <div className="grid gap-4 sm:gap-5">
        <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]}>
          {( [ canSubmit, isSubmitting ] ) =>
            <Button disabled={!canSubmit} type="submit" className="w-full p-4 rounded-xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : product.archived ? 'Unarchive' : 'Archive'}</Button>
          }
        </form.Subscribe>
      </div>
      <p className="mt-5 text-center">Lorem ipsum dolor sit amet</p>
    </form>
  );
};

export default ArchiveProductForm;
