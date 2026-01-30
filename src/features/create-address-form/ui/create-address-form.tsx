import { Button, Field, Fieldset, Input, Legend } from '@headlessui/react';
import { useStore } from '@tanstack/react-form';
import { ChevronRight } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import z from 'zod';

import { useCreateAddressForm } from '../model/use-create-address-form';

type Props = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

const CreateAddressForm: FC<Props> = ( { className, ...others } ) => {
  const form = useCreateAddressForm();
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
    <form onSubmit={handleFormSubmit} className={twMerge( 'rounded-xl border border-zinc-200', className )} {...others}>
      <Fieldset>
        <div className="grid grid-cols-2 bg-zinc-100 rounded-t-xl">
          <p className="p-5">Key</p>
          <p className="p-5">Value</p>
        </div>
        <form.Field name="region" validators={{ onChange: z.string().min( 3, 'Region must be at least 3 characters long' ) }}>
          {field =>
            <Field className="grid grid-cols-2 border-t border-zinc-200">
              <Legend className="p-5">Region</Legend>
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Jambyl" className="peer w-full p-5" />
            </Field>
          }
        </form.Field>
        <form.Field name="city" validators={{ onChange: z.string().min( 3, 'City must be at least 3 characters long' ) }}>
          {field =>
            <Field className="grid grid-cols-2 border-t border-zinc-200">
              <Legend className="p-5">City</Legend>
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Sortobe" className="peer w-full p-5" />
            </Field>
          }
        </form.Field>
        <form.Field name="street" validators={{ onChange: z.string().min( 3, 'Street must be at least 3 characters long' ) }}>
          {field =>
            <Field className="grid grid-cols-2 border-t border-zinc-200">
              <Legend className="p-5">Street</Legend>
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Dank" className="peer w-full p-5" />
            </Field>
          }
        </form.Field>
        <form.Field name="address" validators={{ onChange: z.string().min( 1, 'Address must be at least 1 characters long' ) }}>
          {field =>
            <Field className="grid grid-cols-2 border-t border-zinc-200">
              <Legend className="p-5">Address</Legend>
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="31/1 2 94" className="peer w-full p-5" />
            </Field>
          }
        </form.Field>
        <form.Field name="phone" validators={{ onChange: z.string().length( 10, 'Phone must be 10 characters' ) }}>
          {field =>
            <Field className="grid grid-cols-2 border-t border-zinc-200">
              <Legend className="p-5">Phone</Legend>
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="7761234567" className="peer w-full p-5" />
            </Field>
          }
        </form.Field>
        <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]}>
          {( [ canSubmit, isSubmitting ] ) =>
            <div className="flex items-center justify-between border-t border-zinc-200 bg-zinc-100 rounded-b-xl">
              <p className="p-5">{canSubmit ? 'Delivery address is required to place an order' : <span className="text-red-400">{getErrorMessages()[0]}</span>}</p>
              <p className="p-5">
                <Button disabled={!canSubmit} type="submit" className={twMerge( 'flex items-center gap-2 cursor-pointer disabled:cursor-default disabled:opacity-50', form.state.isTouched ? 'text-emerald-600' : '' )}>
                  {isSubmitting ? '•••' : 'Save'}
                  <ChevronRight aria-hidden="true" strokeWidth={3} className="size-3" />
                </Button>
              </p>
            </div>
          }
        </form.Subscribe>
      </Fieldset>
    </form>
  );
};

export default CreateAddressForm;