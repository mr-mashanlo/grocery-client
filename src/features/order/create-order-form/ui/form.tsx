import { Button } from '@headlessui/react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { useCartStore } from '@/entities/cart';

import { useCreateOrderForm } from '../model/hook';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  className?: string
}

const CreateOrderForm: FC<Props> = ( { className, ...props } ) => {
  const products = useCartStore( state => state.products );
  const getTotalPrice = useCartStore( state => state.getTotalPrice );
  const getTotalQuantity = useCartStore( state => state.getTotalQuantity );
  const form = useCreateOrderForm( products, getTotalPrice(), getTotalQuantity() );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} className={twMerge( 'w-full sm:w-80 relative', className )} {...props}>
      <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]}>
        {( [ canSubmit, isSubmitting ] ) =>
          <Button disabled={!canSubmit} type="submit" className="w-full p-4 rounded-xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : 'Buy'}</Button>
        }
      </form.Subscribe>
    </form>
  );
};

export default CreateOrderForm;