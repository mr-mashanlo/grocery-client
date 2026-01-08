import { kyInstance } from '@/shared/libs';

import { type Address, type AddressDTO } from '../model/schema';

class AddressService {

  get = async (): Promise<Address> => {
    const response = await kyInstance( 'addresses', { method: 'get' } );
    return await response.json();
  };

  upgrade = async ( data: AddressDTO ): Promise<Address> => {
    const response = await kyInstance( 'addresses', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const addressService = new AddressService();