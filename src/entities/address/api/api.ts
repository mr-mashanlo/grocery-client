import { kyInstance } from '@/shared/libs';

import { type Address, type CreateAddressDTO, type PaginatedAddress, type UpdateAddressDTO } from '../model/schema';

class AddressService {

  createAddress = async ( data: CreateAddressDTO ): Promise<Address> => {
    const response = await kyInstance( 'addresses', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  deleteAddress = async ( id: string ): Promise<Address> => {
    const response = await kyInstance( `addresses/${id}`, { method: 'delete' } );
    return await response.json();
  };

  getAddresses = async ( params?: Record<string, string> ): Promise<PaginatedAddress> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `addresses?${searchParams}`, { method: 'get' } );
    return await response.json();
  };

  getAddressById = async ( id: string ): Promise<Address> => {
    const response = await kyInstance( `addresses/${id}`, { method: 'get' } );
    return await response.json();
  };

  getMyAddress = async (): Promise<Address> => {
    const response = await kyInstance( 'addresses/me', { method: 'get' } );
    return await response.json();
  };

  updateAddress = async ( id: string, data: UpdateAddressDTO ): Promise<Address> => {
    const response = await kyInstance( `addresses/${id}`, { method: 'put', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const addressService = new AddressService();
