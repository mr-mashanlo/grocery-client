import { z } from 'zod';

import { type PaginatedResponse } from '@/shared/types';

export const AddressSchema = z.object( {
  _id: z.string(),
  user: z.string(),
  city: z.string(),
  address: z.string(),
  phone: z.string()
} );

export const CreateAddressSchema = AddressSchema.omit( { _id: true, user: true } );

export const UpdateAddressSchema = AddressSchema.omit( { _id: true, user: true } );

export type Address = z.infer<typeof AddressSchema>;

export type CreateAddressDTO = z.infer<typeof CreateAddressSchema>;

export type UpdateAddressDTO = z.infer<typeof UpdateAddressSchema>;

export type PaginatedAddress = PaginatedResponse<Address>