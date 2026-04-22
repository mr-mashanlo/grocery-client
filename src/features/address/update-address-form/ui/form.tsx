import { Button, Field, Input } from '@headlessui/react';
import { Compass, OctagonAlert, Phone } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { type Address, UpdateAddressSchema } from '@/entities/address';

import { useUpdateAddressForm } from '../model/hook';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  address: Address,
  className?: string
};

const UpdateAddressForm: FC<Props> = ( { address, className, ...props } ) => {
  const form = useUpdateAddressForm( address );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} className={twMerge( 'w-full sm:w-80 relative', className )} {...props}>
      <h3 className="mb-5 text-xl text-center font-bold">Update image</h3>
      <div className="grid gap-4 sm:gap-5">
        <form.Field name="city" validators={{ onChange: UpdateAddressSchema.shape.city.min( 3 ) }}>
          {field =>
            <Field className="block grow relative">
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Address" className="peer w-full p-4 pl-11 rounded-xl bg-zinc-100 placeholder:text-zinc-300 focus:bg-transparent data-[error=true]:outline-rose-500" />
              {!field.state.meta.isValid ? <OctagonAlert className="w-4 h-4 stroke-red-500 absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" /> : <Compass className="w-4 h-4 stroke-zinc-300 peer-focus:stroke-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />}
            </Field>
          }
        </form.Field>
        <form.Field name="address" validators={{ onChange: UpdateAddressSchema.shape.address.min( 3 ) }}>
          {field =>
            <Field className="block grow relative">
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Address" className="peer w-full p-4 pl-11 rounded-xl bg-zinc-100 placeholder:text-zinc-300 focus:bg-transparent data-[error=true]:outline-rose-500" />
              {!field.state.meta.isValid ? <OctagonAlert className="w-4 h-4 stroke-red-500 absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" /> : <Compass className="w-4 h-4 stroke-zinc-300 peer-focus:stroke-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />}
            </Field>
          }
        </form.Field>
        <form.Field name="phone" validators={{ onChange: UpdateAddressSchema.shape.phone.min( 10 ).max( 12 ) }}>
          {field =>
            <Field className="block grow relative">
              <Input type="tel" name={field.name} pattern="[0-9]{10}" value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Address" className="peer w-full p-4 pl-11 rounded-xl bg-zinc-100 placeholder:text-zinc-300 focus:bg-transparent data-[error=true]:outline-rose-500" />
              {!field.state.meta.isValid ? <OctagonAlert className="w-4 h-4 stroke-red-500 absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" /> : <Phone className="w-4 h-4 stroke-zinc-300 peer-focus:stroke-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />}
            </Field>
          }
        </form.Field>
        <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]}>
          {( [ canSubmit, isSubmitting ] ) =>
            <Button disabled={!canSubmit} type="submit" className="w-full p-4 rounded-xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : 'Save'}</Button>
          }
        </form.Subscribe>
      </div>
      <p className="mt-5 text-center">Lorem ipsum dolor sit amet</p>
    </form>
  );
};

export default UpdateAddressForm;
