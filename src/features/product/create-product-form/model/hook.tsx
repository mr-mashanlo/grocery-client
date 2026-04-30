import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';
import { useNavigate } from 'react-router';

import { type CreateProductDTO, useCreateProduct } from '@/entities/product';
import { mapServerErrors } from '@/shared/libs';

export const useCreateProductForm = () => {
  const navigate = useNavigate();
  const close = useClose();
  const { create } = useCreateProduct();

  const form = useForm( {
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      salePrice: 0,
      images: [],
      categories: []
    } as CreateProductDTO,

    onSubmit: async ( { value, formApi } ) => {
      try {
        await create.mutateAsync( value );
        form.reset();
        close();
        navigate( '/admin/products' );
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