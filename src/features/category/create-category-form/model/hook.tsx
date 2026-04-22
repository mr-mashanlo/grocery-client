import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { type CreateCategoryDTO, useCreateCategory } from '@/entities/category';

export const useCreateCategoryForm = () => {
  const close = useClose();
  const { create } = useCreateCategory();

  const form = useForm( {
    defaultValues: {
      image: '',
      name: '',
      archived: false
    } as CreateCategoryDTO,

    onSubmit: async ( { value } ) => {
      try {
        await create.mutateAsync( value );
        form.reset();
        close();
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return form;
};