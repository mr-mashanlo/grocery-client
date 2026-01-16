import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';
import { useNavigate } from 'react-router';

import { useAddress } from '@/entities/address';
import { useCartStore } from '@/entities/cart';
import { useCreateOrder } from '@/entities/order';
import { useProducts } from '@/entities/product';
import { mapServerErrors } from '@/shared/mappers';

export const useOrderForm = () => {

  const navigate = useNavigate();
  const { address } = useAddress();
  const { create } = useCreateOrder();
  const { products: cartProducts, getQuantities, reset } = useCartStore();
  const { products: shopProducts } = useProducts( { limit: '48' } );

  const products = cartProducts.map( cartProduct => ( { ...cartProduct, price: shopProducts.data?.find( shopProduct => cartProduct._id === shopProduct._id )?.price || 0 } ) );

  const totalPrice = cartProducts.reduce( ( acc, cartProduct ) => {
    const shopProduct = shopProducts.data?.find( shopProduct => cartProduct._id === shopProduct._id );
    return acc = acc + cartProduct.quantity * ( shopProduct?.price || 0 );
  }, 0 );

  const form = useForm( {
    onSubmit: async ( { formApi } ) => {
      try {
        const order = await create.mutateAsync( { products, address: address.data?._id || '', totalPrice, totalQuantity: getQuantities() } );
        navigate( `/order/${order._id}`, { replace: true } );
        reset();
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