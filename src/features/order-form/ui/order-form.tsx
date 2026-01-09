import { Button } from '@headlessui/react';
import { type FC, type FormEvent } from 'react';

import { useOrderForm } from '../model/use-order-form';

const OrderForm: FC = () => {
  const form = useOrderForm();

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full relative">
      <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]} children={( [ canSubmit, isSubmitting ] ) =>
        <Button disabled={!canSubmit} type="submit" className="w-full py-5 text-center bg-zinc-200 cursor-pointer disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : 'Order'}</Button> }
      />
    </form>
  );
};

export default OrderForm;