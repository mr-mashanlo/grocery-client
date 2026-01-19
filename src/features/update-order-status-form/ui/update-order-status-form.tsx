import { Button, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';
import { useParams } from 'react-router';

import { useUpdateOrderForm } from '../model/use-update-order-status-form';

type Props = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

const UpdateOrderStatusForm: FC<Props> = ( props ) => {
  const { id } = useParams();
  const form = useUpdateOrderForm( id || '' );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} {...props}>
      <form.Field name="status" children={field =>
        <Listbox value={field.state.value} onChange={value => field.handleChange( value )}>
          <ListboxButton className="p-5 col-span-2 text-left bg-zinc-100 cursor-pointer outline-0">
            {field.state.value}
          </ListboxButton>
          <ListboxOptions anchor="top" transition className="w-(--button-width) p-5 flex flex-col gap-5 bg-zinc-100 transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-0">
            <ListboxOption value="Processing" className="group flex items-center gap-2 cursor-pointer">Processing</ListboxOption>
            <ListboxOption value="Shipped" className="group flex items-center gap-2 cursor-pointer">Shipped</ListboxOption>
            <ListboxOption value="Delivered" className="group flex items-center gap-2 cursor-pointer">Delivered</ListboxOption>
            <ListboxOption value="Canceled" className="group flex items-center gap-2 cursor-pointer">Canceled</ListboxOption>
          </ListboxOptions>
        </Listbox>
      } />
      <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]} children={( [ canSubmit, isSubmitting ] ) =>
        <Button disabled={!canSubmit} type="submit" className="w-full py-5 text-center bg-black text-white cursor-pointer disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : 'Update'}</Button> }
      />
    </form>
  );
};

export default UpdateOrderStatusForm;