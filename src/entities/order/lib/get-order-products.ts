import  { type Product } from '../@x/product';
import { type Order } from '../model/schema';

export const getOrderProducts = ( orderProducts: Order, shopProducts: Array<Product> ) => {

  return orderProducts.products.reduce( ( acc: Array<Product>, orderProduct ) => {
    const product = shopProducts.find( shopProduct => shopProduct._id === orderProduct._id );
    if ( product ) acc.push( { ...product, quantity: { quantity: orderProduct.quantity }, price: orderProduct.price } );
    return acc;
  }, [] );

};