import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { type Cart } from './schema';

interface Store {
  products: Array<Cart>,
  increase: ( product: string ) => void,
  decrease: ( product: string ) => void,
  getProduct: ( product: string ) => Cart | undefined,
  getQuantity: ( product: string ) => number
  getQuantities: () => number
}

export const useCartStore = create( persist<Store>( ( set, get ) => ( {

  products: [],

  increase: ( product ) => {
    const exists = get().products.find( item => item.product === product );
    if ( !exists ) set( { products: [ ...get().products, { product, quantity: 1 } ] } );
    const updatedProducts = get().products.map( item => item.product === product ? { ...item, quantity: item.quantity + 1 } : item );
    set( { products: updatedProducts } );
  },

  decrease: ( product ) => {
    const exists = get().products.find( item => item.product === product );
    if ( !exists ) return;
    if ( exists.quantity <= 0 ) set( { products: get().products.filter( item => item.product !== product ) } );
    const updatedProducts = get().products.map( item => item.product === product ? { ...item, quantity: item.quantity - 1 } : item );
    set( { products: updatedProducts } );
  },

  getProduct: ( product ) => {
    return get().products.find( item => item.product === product );
  },

  getQuantity: ( product ) => {
    return get().products.find( item => item.product === product )?.quantity || 0;
  },

  getQuantities: () => {
    return get().products.reduce( ( acc, item ) => { return acc = acc + item.quantity; }, 0 );
  }

} ), { name: 'cart' } ) );