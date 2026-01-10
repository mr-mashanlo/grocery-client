import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { type Cart } from './schema';

interface Store {
  products: Array<Cart>,
  increase: ( product: string ) => void,
  decrease: ( product: string ) => void,
  getQuantity: ( product: string ) => number,
  getQuantities: () => number,
  reset: () => void
}

export const useCartStore = create( persist<Store>( ( set, get ) => ( {

  products: [],

  increase: ( _id ) => {
    const exists = get().products.find( item => item._id === _id );
    if ( !exists ) return set( { products: [ ...get().products, { _id, quantity: 1 } ] } );
    const updatedProducts = get().products.map( item => item._id === _id ? { ...item, quantity: item.quantity + 1 } : item );
    return set( { products: updatedProducts } );
  },

  decrease: ( _id ) => {
    const exists = get().products.find( item => item._id === _id );
    if ( !exists ) return;
    if ( exists.quantity <= 1 ) return set( { products: get().products.filter( item => item._id !== _id ) } );
    const updatedProducts = get().products.map( item => item._id === _id ? { ...item, quantity: item.quantity - 1 } : item );
    return set( { products: updatedProducts } );
  },

  getQuantity: ( _id ) => {
    return get().products.find( item => item._id === _id )?.quantity || 0;
  },

  getQuantities: () => {
    return get().products.reduce( ( acc, item ) => { return acc = acc + item.quantity; }, 0 );
  },

  reset: () => {
    return set( { products: [] } );
  }

} ), { name: 'cart' } ) );