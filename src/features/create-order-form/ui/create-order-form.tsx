import { Button } from '@headlessui/react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';

import { useCreateOrderForm } from '../model/use-create-order-form';

type Props = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

const CreateOrderForm: FC<Props> = ( props ) => {
  const form = useCreateOrderForm();

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} {...props}>
      <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]} children={( [ canSubmit, isSubmitting ] ) =>
        <Button disabled={!canSubmit} type="submit" className="w-full py-5 text-center bg-black text-white cursor-pointer disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : 'Buy'}</Button> }
      />
    </form>
  );
};

export default CreateOrderForm;