import  { type Product } from '../@x/product';
import  { type Cart } from '../model/schema';

export const getCartProducts = ( cartProducts: Array<Cart>, shopProducts: Array<Product> ) => {

  return cartProducts.reduce( ( acc: Array<Product>, cartProduct ) => {
    const product = shopProducts.find( shopProduct => shopProduct._id === cartProduct._id );
    if ( product ) acc.push( { ...product, quantity: cartProduct.quantity } );
    return acc;
  }, [] );

};