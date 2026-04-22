import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { type Cart, type CreateCartDTO } from './schema';

interface Store {
  products: Array<Cart>,
  increase: ( product: CreateCartDTO ) => void,
  decrease: ( product: CreateCartDTO ) => void,
  getTotalQuantity: () => number,
  getTotalPrice: () => number,
  reset: () => void
}

export const useCartStore = create( persist<Store>( ( set, get ) => ( {

  products: [],

  increase: ( product: CreateCartDTO ) => {
    const products = get().products;
    const exists = products.find( item => item._id === product._id );

    if ( exists ) {
      return set( { products: products.map( item => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item ) } );
    } else {
      return set( { products: [ ...products, { ...product, quantity: 1 } ] } );
    }
  },

  decrease: ( product: CreateCartDTO ) => {
    const products = get().products;
    const exists = products.find( item => item._id === product._id );

    if ( exists && exists.quantity > 1 ) {
      return set( { products: products.map( item => item._id === product._id ? { ...item, quantity: item.quantity - 1 } : item ) } );
    } else {
      return set( { products: products.filter( item => item._id !== product._id ) } );
    }
  },

  getTotalQuantity: () => {
    const products = get().products;
    return products.reduce( ( acc, item ) => { return acc = acc + item.quantity; }, 0 );
  },

  getTotalPrice: () => {
    const products = get().products;
    return products.reduce( ( acc, item ) => { return acc = acc + item.price * item.quantity; }, 0 );
  },

  reset: () => {
    return set( { products: [] } );
  }

} ), { name: 'cart' } ) );