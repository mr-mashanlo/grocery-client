import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type Product, type UpdateProductDTO, useUpdateProduct } from '@/entities/product';
import { mapServerErrors } from '@/shared/libs';

export const useArchiveProductForm = ( product: Product ) => {
  const close = useClose();
  const { update } = useUpdateProduct();

  const form = useForm( {
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      salePrice: product.salePrice,
      archived: !product.archived,
      images: product.images.map( image => image._id ),
      categories: product.categories
    } as UpdateProductDTO,

    onSubmit: async ( { value, formApi } ) => {
      try {
        await update.mutateAsync( { id: product._id, data: value } );
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
