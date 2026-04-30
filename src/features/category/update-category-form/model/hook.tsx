import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type Category, type UpdateCategoryDTO, useUpdateCategory } from '@/entities/category';
import { mapServerErrors } from '@/shared/libs';

export const useUpdateCategoryForm = ( category: Category ) => {
  const close = useClose();
  const { update } = useUpdateCategory();

  const form = useForm( {
    defaultValues: {
      image: category.image._id,
      name: category.name,
      archived: category.archived
    } as UpdateCategoryDTO,

    onSubmit: async ( { value, formApi } ) => {
      try {
        await update.mutateAsync( { id: category._id, data: value } );
        form.reset();
        close();
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          const errors = await error.response.json();
          formApi.setErrorMap( { onChange: { fields: mapServerErrors( errors.errors ) } } );
        }
      }
    }
  } );

  return form;
};
