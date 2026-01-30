type CartProducts = Array<{ product: string, quantity: number }>

type StoreProducts = Array<{ _id: string, price: number }>

export const mapCartPrices = ( cartProducts: CartProducts, storeProducts: StoreProducts ) => {

  return cartProducts.reduce( ( acc, cartProduct ) => {
    const product = storeProducts.find( storeProduct => storeProduct._id === cartProduct.product );

    if ( !product ) return acc;

    return acc = Math.round( acc + cartProduct.quantity * product.price );
  }, 0 );

};