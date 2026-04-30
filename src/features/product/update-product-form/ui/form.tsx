import { Button, Field, Fieldset, Input, Label, Legend, Listbox, ListboxButton, ListboxOption, ListboxOptions, Textarea } from '@headlessui/react';
import { useStore } from '@tanstack/react-form';
import { BadgeCent, Grid2x2, OctagonAlert, TypeOutline } from 'lucide-react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { useCategories } from '@/entities/category';
import { useImages } from '@/entities/image';
import { type Product, UpdateProductSchema } from '@/entities/product';

import { useUpdateProductForm } from '../model/hook';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  product: Product,
  className?: string
};

const UpdateProductForm: FC<Props> = ( { product, className, ...props } ) => {
  const { images } = useImages( { limit: '1000' } );
  const { categories } = useCategories( { limit: '1000' } );
  const form = useUpdateProductForm( product );
  const { canSubmit, fieldMeta } = useStore( form.store, state => state );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const getErrorMessages = () => {
    return Object.values( fieldMeta ).filter( field => field?.errors.length ).map( field => field?.errors.map( item => item.message ) );
  };

  return (
    <form onSubmit={handleFormSubmit} className={twMerge( 'w-full sm:w-165 relative', className )} {...props}>
      <h3 className="mb-5 text-xl text-center font-bold">Update product</h3>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <Fieldset className="h-30 p-1.25 bg-white rounded-xl grid grid-cols-5 sm:grid-cols-10 gap-1.25 sm:col-span-2 content-start overflow-y-auto no-scrollbar">
          <Legend className="sr-only">Image</Legend>
          {images.data?.data.map( image => (
            <form.Field key={image._id} name="images" validators={{ onChange: UpdateProductSchema.shape.images }}>
              {field =>
                <Field className="block aspect-square relative">
                  <Input type="checkbox" name={field.name} value={image._id} onChange={e => field.handleChange( field.state.value.includes( e.target.value ) ? field.state.value.filter( image => image !== e.target.value ) : [ ...field.state.value, e.target.value ] )} checked={field.state.value.includes( image._id )} className="peer sr-only" />
                  <Label className="block rounded-[.625rem] cursor-pointer overflow-hidden peer-checked:outline-2">
                    <img src={image.url} alt={image.alt} className="w-full h-full"/>
                  </Label>
                </Field>
              }
            </form.Field>
          ) )}
        </Fieldset>
        <form.Field name="description" validators={{ onChange: UpdateProductSchema.shape.description }}>
          {field =>
            <Field className="block min-h-40 sm:col-span-2 relative">
              <Textarea name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Product" className="peer w-full h-full p-4 rounded-xl bg-zinc-100 placeholder:text-zinc-300 focus:bg-transparent data-[error=true]:outline-rose-500" />
            </Field>
          }
        </form.Field>
        <form.Field name="name" validators={{ onChange: UpdateProductSchema.shape.name }}>
          {field =>
            <Field className="block relative">
              <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Product" className="peer w-full p-4 pl-11 rounded-xl bg-zinc-100 placeholder:text-zinc-300 focus:bg-transparent data-[error=true]:outline-rose-500" />
              {!field.state.meta.isValid ? <OctagonAlert className="w-4 h-4 stroke-red-500 absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" /> : <TypeOutline className="w-4 h-4 stroke-zinc-300 peer-focus:stroke-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />}
            </Field>
          }
        </form.Field>
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <form.Field name="price" validators={{ onChange: UpdateProductSchema.shape.price }}>
            {field =>
              <Field className="block relative">
                <Input type="number" min="0" name={field.name} value={field.state.value === 0 ? '' : field.state.value} onChange={e => field.handleChange( Number( e.target.value ) )} onWheel={e => e.currentTarget.blur()} data-error={field.state.meta.isValid ? false : true} placeholder="Price" className="peer w-full p-4 pl-11 rounded-xl bg-zinc-100 placeholder:text-zinc-300 focus:bg-transparent data-[error=true]:outline-rose-500" />
                {!field.state.meta.isValid ? <OctagonAlert className="w-4 h-4 stroke-red-500 absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" /> : <BadgeCent className="w-4 h-4 stroke-zinc-300 peer-focus:stroke-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />}
              </Field>
            }
          </form.Field>
          <form.Field name="salePrice" validators={{ onChange: UpdateProductSchema.shape.salePrice }}>
            {field =>
              <Field className="block relative">
                <Input type="number" min="0" name={field.name} defaultValue={field.state.value === 0 ? '' : field.state.value} onChange={e => field.handleChange( Number( e.target.value ) )} onWheel={e => e.currentTarget.blur()} data-error={field.state.meta.isValid ? false : true} placeholder="Sale price" className="peer w-full p-4 pl-11 rounded-xl bg-zinc-100 placeholder:text-zinc-300 focus:bg-transparent data-[error=true]:outline-rose-500" />
                {!field.state.meta.isValid ? <OctagonAlert className="w-4 h-4 stroke-red-500 absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" /> : <BadgeCent className="w-4 h-4 stroke-zinc-300 peer-focus:stroke-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />}
              </Field>
            }
          </form.Field>
        </div>
        <form.Field name="categories" validators={{ onChange: UpdateProductSchema.shape.categories }}>
          {field =>
            <Listbox value={field.state.value} onChange={field.handleChange} by="_id" multiple>
              <div className="relative">
                <ListboxButton className={twMerge( 'w-full p-4 pl-11 rounded-xl bg-zinc-100 text-left', field.state.value.length ? null : 'text-zinc-300' )}><span className="line-clamp-1">{field.state.value.length ? field.state.value.map( category => category.name ).join( ', ' ) : 'Cateroties'}</span></ListboxButton>
                {!field.state.meta.isValid ? <OctagonAlert className="w-4 h-4 stroke-red-500 absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" /> : <Grid2x2 className="w-4 h-4 stroke-zinc-300 peer-focus:stroke-black absolute top-1/2 left-4 -translate-y-1/2" aria-hidden="true" />}
              </div>
              <ListboxOptions anchor="bottom" className="w-(--button-width) my-1 p-1 bg-white rounded-md border border-zinc-200">
                {categories.data?.data.map( category => (
                  <ListboxOption key={category._id} value={{ _id: category._id, name: category.name, slug: category.slug }} className="px-3 py-1.5 rounded-md data-focus:bg-zinc-100">{category.name}</ListboxOption>
                ) )}
              </ListboxOptions>
            </Listbox>
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

export default UpdateProductForm;