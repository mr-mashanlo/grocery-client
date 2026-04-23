import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from 'react-router';

import { type CreateProductDTO, useCreateProduct } from '@/entities/product';

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

    onSubmit: async ( { value } ) => {
      try {
        await create.mutateAsync( value );
        form.reset();
        close();
        navigate( '/admin/products' );
      } catch ( error ) {
        console.log( error );
      }
    }
  } );

  return form;
};