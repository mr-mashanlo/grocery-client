import { useClose } from '@headlessui/react';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from 'react-router';

import { type Product, type UpdateProductDTO, useUpdateProduct } from '@/entities/product';

export const useUpdateProductForm = ( product: Product ) => {
  const navigate = useNavigate();
  const close = useClose();
  const { update } = useUpdateProduct();

  const form = useForm( {
    defaultValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      salePrice: product.salePrice,
      archived: product.archived,
      images: product.images.map( image => image._id ),
      categories: product.categories
    } as UpdateProductDTO,

    onSubmit: async ( { value } ) => {
      try {
        await update.mutateAsync( { id: product._id, data: value } );
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
