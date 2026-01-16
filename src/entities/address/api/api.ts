import { kyInstance } from '@/shared/libs';

import { type Address, type AddressDTO } from '../model/schema';

class AddressService {

  createAddress = async ( data: AddressDTO ): Promise<Address> => {
    const response = await kyInstance( 'addresses', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  getMyAddress = async (): Promise<Address> => {
    const response = await kyInstance( 'addresses', { method: 'get' } );
    return await response.json();
  };

  upgradeAddress = async ( id: string, data: AddressDTO ): Promise<Address> => {
    const response = await kyInstance( `addresses/${id}`, { method: 'put', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const addressService = new AddressService();