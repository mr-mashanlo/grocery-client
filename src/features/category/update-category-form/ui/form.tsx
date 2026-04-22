import { Button, Field, Fieldset, Input, Label, Legend } from '@headlessui/react';
import { OctagonAlert, TypeOutline } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { type Category, UpdateCategorySchema } from '@/entities/category';
import { useImages } from '@/entities/image';

import { useUpdateCategoryForm } from '../model/hook';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  category: Category,
  className?: string
};

const UpdateCategoryForm: FC<Props> = ( { category, className, ...props } ) => {
  const { images } = useImages( { limit: '1000' } );
  const form = useUpdateCategoryForm( category );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} className={twMerge( 'w-full sm:w-80 relative', className )} {...props}>
      <h3 className="mb-5 text-xl text-center font-bold">Update image</h3>
      <div className="grid gap-4 sm:gap-5">
        <Fieldset className="max-h-24 p-0.5 grid grid-cols-5 gap-4 sm:gap-5 overflow-y-auto no-scrollbar">
          <Legend className="sr-only">Image</Legend>
          {images.data?.data.map( image => (
            <form.Field key={image._id} name="image" validators={{ onChange: UpdateCategorySchema.shape.image }}>
              {field =>
                <Field className="block grow relative">
                  <Input type="radio" name={field.name} value={image._id} onChange={e => field.handleChange( e.target.value )} checked={field.state.value === image._id} data-error={field.state.meta.isValid ? false : true} placeholder="Category" className="peer sr-only" />
                  <Label className="block w-12.5 h-12.5 rounded-xl cursor-pointer peer-checked:outline-2">
                    <img src={image.url} alt={image.alt} className="w-full h-full rounded-xl"/>
                  </Label>
                </Field>
              }
            </form.Field>
          ) )}
        </Fieldset>
        <form.Field name="name" validators={{ onChange: UpdateCategorySchema.shape.name }}>
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
      <p className="mt-5 text-center">Lorem ipsum dolor sit amet</p>
    </form>
  );
};

export default UpdateCategoryForm;
