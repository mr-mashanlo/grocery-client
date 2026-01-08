import { Button, Field, Fieldset, Input, Legend } from '@headlessui/react';
import { useStore } from '@tanstack/react-form';
import { type FC, type FormEvent } from 'react';
import z from 'zod';

import { useAddressForm } from '../model/use-address-form';

const AddressForm: FC = () => {
  const form = useAddressForm();
  const canSubmit = useStore( form.store, state => state.canSubmit );
  const metaData = useStore( form.store, state => state.fieldMeta );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const getErrorMessages = () => {
    return Object.values( metaData ).filter( field => field.errors.length ).map( field => field.errors.map( item => item.message ) );
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full sm:w-173 relative">
      <Fieldset>
        <Legend className="mb-8 text-3xl text-center font-bold">Address</Legend>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          <form.Field name="region" validators={{ onChange: z.string().min( 3, 'Region must be at least 3 characters long' ) }} children={field =>
            <Field className="block relative">
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Jambyl" className="peer w-full p-5 pl-14 rounded-2xl bg-zinc-100 placeholder:text-zinc-400/50 focus:bg-transparent data-[error=true]:outline-rose-500" />
            </Field> }
          />
          <form.Field name="city" validators={{ onChange: z.string().min( 3, 'City must be at least 3 characters long' ) }} children={field =>
            <Field className="block relative">
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Sortobe" className="peer w-full p-5 pl-14 rounded-2xl bg-zinc-100 placeholder:text-zinc-400/50 focus:bg-transparent data-[error=true]:outline-rose-500" />
            </Field> }
          />
          <form.Field name="street" validators={{ onChange: z.string().min( 3, 'Street must be at least 3 characters long' ) }} children={field =>
            <Field className="block relative">
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Dank" className="peer w-full p-5 pl-14 rounded-2xl bg-zinc-100 placeholder:text-zinc-400/50 focus:bg-transparent data-[error=true]:outline-rose-500" />
            </Field> }
          />
          <form.Field name="address" validators={{ onChange: z.string().min( 1, 'Address must be at least 1 characters long' ) }} children={field =>
            <Field className="block relative">
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="31/1 2 94" className="peer w-full p-5 pl-14 rounded-2xl bg-zinc-100 placeholder:text-zinc-400/50 focus:bg-transparent data-[error=true]:outline-rose-500" />
            </Field> }
          />
          <form.Field name="phone" validators={{ onChange: z.string().length( 10, 'Phone must be 10 characters' ) }} children={field =>
            <Field className="block relative">
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="7761234567" className="peer w-full p-5 pl-14 rounded-2xl bg-zinc-100 placeholder:text-zinc-400/50 focus:bg-transparent data-[error=true]:outline-rose-500" />
            </Field> }
          />
          <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]} children={( [ canSubmit, isSubmitting ] ) =>
            <Button disabled={!canSubmit} type="submit" className="w-full p-5 rounded-2xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : 'Save'}</Button> }
          />
        </div>
        <p className="mt-5 text-center leading-6">Lorem ipsum dolor sit amet</p>
        {!canSubmit && <p className="w-full mt-3 px-3 text-center text-red-600 absolute top-full">{getErrorMessages().join( ', ' )}</p>}
      </Fieldset>
    </form>
  );
};

export default AddressForm;