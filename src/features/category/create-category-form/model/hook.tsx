import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type CreateCategoryDTO, useCreateCategory } from '@/entities/category';
import { mapServerErrors } from '@/shared/libs';

export const useCreateCategoryForm = () => {
  const close = useClose();
  const { create } = useCreateCategory();

  const form = useForm( {
    defaultValues: {
      image: '',
      name: '',
      archived: false
    } as CreateCategoryDTO,

    onSubmit: async ( { value, formApi } ) => {
      try {
        await create.mutateAsync( value );
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