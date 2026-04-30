import { Button, Field, Input } from '@headlessui/react';
import { useStore } from '@tanstack/react-form';
import { OctagonAlert, TypeOutline } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { type Image, UpdateImageSchema } from '@/entities/image';

import { useUpdateImageForm } from '../model/hook';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  image: Image,
  className?: string
};

const UpdateImageForm: FC<Props> = ( { image, className, ...props } ) => {
  const form = useUpdateImageForm( image );
  const { canSubmit, fieldMeta } = useStore( form.store, state => state );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const getErrorMessages = () => {
    return Object.values( fieldMeta ).filter( field => field.errors.length ).map( field => field.errors.map( item => item.message ) );
  };

  return (
    <form onSubmit={handleFormSubmit} className={twMerge( 'w-full sm:w-80 relative', className )} {...props}>
      <h3 className="mb-5 text-xl text-center font-bold">Update image</h3>
      <div className="grid gap-4 sm:gap-5">
        <form.Field name="alt" validators={{ onChange: UpdateImageSchema.shape.alt }}>
          {field =>
            <Field className="block relative">
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Description" className="peer w-full p-4 pl-11 rounded-xl bg-zinc-100 placeholder:text-zinc-300 focus:bg-transparent data-[error=true]:outline-rose-500" />
              {!field.state.meta.isValid ? <OctagonAlert className="w-4 h-4 stroke-red-500 absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" /> : <TypeOutline className="w-4 h-4 stroke-zinc-300 peer-focus:stroke-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />}
            </Field>
          }
        </form.Field>
        <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]}>
          {( [ canSubmit, isSubmitting ] ) =>
            <Button disabled={!canSubmit} type="submit" className="w-full p-4 rounded-xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : 'Save'}</Button>
          }
        </form.Subscribe>
      </div>
      <div className="w-full mt-5 text-center absolute top-full">
        {!canSubmit ?
          <p className=" text-red-600">{getErrorMessages().join( ', ' )}</p> :
          <p>Lorem ipsum dolor sit amet</p>
        }
      </div>
    </form>
  );
};

export default UpdateImageForm;
