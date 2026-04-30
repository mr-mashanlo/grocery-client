import { kyInstance } from '@/shared/libs';

import { type Address, type CreateAddressDTO, type PaginatedAddress, type UpdateAddressDTO } from '../model/schema';

class AddressService {

  createAddress = ( data: CreateAddressDTO ): Promise<Address> => {
    return kyInstance.post( 'addresses', { json: data } ).json();
  };

  deleteAddress = ( id: string ): Promise<Address> => {
    return kyInstance.delete( `addresses/${id}` ).json();
  };

  getAddresses = ( searchParams?: Record<string, string> ): Promise<PaginatedAddress> => {
    return kyInstance.get( 'addresses', { searchParams } ).json();
  };

  getAddressById = ( id: string ): Promise<Address> => {
    return kyInstance.get( `addresses/${id}` ).json();
  };

  getMyAddress = (): Promise<Address> => {
    return kyInstance.get( 'addresses/me' ).json();
  };

  updateAddress = ( id: string, data: UpdateAddressDTO ): Promise<Address> => {
    return kyInstance.put( `addresses/${id}`, { json: data } ).json();
  };

}

export const addressService = new AddressService();
