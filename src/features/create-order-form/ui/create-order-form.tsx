import { Button } from '@headlessui/react';
import { ChevronRight } from 'lucide-react';
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
      <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]}>
        {( [ canSubmit, isSubmitting ] ) => (
          <Button disabled={!canSubmit} type="submit" className="flex items-center gap-2 cursor-pointer disabled:cursor-default disabled:opacity-70">
            {isSubmitting ? '•••' : 'Buy now'}
            <ChevronRight aria-hidden="true" strokeWidth={3} className="size-3" />
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
};

export default CreateOrderForm;