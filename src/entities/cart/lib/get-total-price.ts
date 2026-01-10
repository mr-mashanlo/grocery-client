import  { type Product } from '../@x/product';
import  { type Cart } from '../model/schema';

export const getTotalPrice = ( cartProducts: Array<Cart>, shopProducts: Array<Product> ) => {

  return cartProducts.reduce( ( acc: number, cartProduct ) => {
    const product = shopProducts.find( shopProduct => shopProduct._id === cartProduct._id );
    if ( product ) return acc += cartProduct.quantity * product.price;
    return acc;
  }, 0 );

};