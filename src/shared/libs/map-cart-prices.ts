type CartProducts = Array<{ _id: string, quantity: number }>

type StoreProducts = Array<{ _id: string, price: number }>

export const mapCartPrices = ( cartProducts: CartProducts, storeProducts: StoreProducts ) => {

  return cartProducts.reduce( ( acc, cartProduct ) => {
    const product = storeProducts.find( storeProduct => storeProduct._id === cartProduct._id );

    if ( !product ) return acc;

    return acc = acc + cartProduct.quantity * product.price;
  }, 0 );

};