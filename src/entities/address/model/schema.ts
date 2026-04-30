import { z } from 'zod';

import { type PaginatedResponse } from '@/shared/types';

export const AddressSchema = z.object( {
  _id: z.string(),
  user: z.string(),
  city: z.string().min( 3, 'City must be ≥ 3 characters' ),
  address: z.string().min( 3, 'Address must be ≥ 3 characters' ),
  phone: z.string().min( 10, 'Phone must be ≥ 10 characters' ).max( 12, 'Phone must be ≤ 12 characters' )
} );

export const CreateAddressSchema = AddressSchema.omit( { _id: true, user: true } );

export const UpdateAddressSchema = AddressSchema.omit( { _id: true, user: true } );

export type Address = z.infer<typeof AddressSchema>;

export type CreateAddressDTO = z.infer<typeof CreateAddressSchema>;

export type UpdateAddressDTO = z.infer<typeof UpdateAddressSchema>;

export type PaginatedAddress = PaginatedResponse<Address>