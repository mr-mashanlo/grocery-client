import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';

import { type Category, type UpdateCategoryDTO, useUpdateCategory } from '@/entities/category';

export const useArchiveCategoryForm = ( category: Category ) => {
  const close = useClose();
  const { update } = useUpdateCategory();

  const form = useForm( {
    defaultValues: {
      image: category.image._id,
      name: category.name,
      archived: !category.archived
    } as UpdateCategoryDTO,

    onSubmit: async ( { value } ) => {
      try {
        await update.mutateAsync( { id: category._id, data: value } );
        form.reset();
        close();
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return form;
};
