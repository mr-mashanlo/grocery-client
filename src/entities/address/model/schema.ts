import { z } from 'zod';

export const AddressDTOSchema = z.object( {
  region: z.string(),
  city: z.string(),
  street: z.string(),
  address: z.string(),
  phone: z.string()
} );

export const AddressSchema = z.object( {
  _id: z.string(),
  user: z.string(),
  region: z.string(),
  city: z.string(),
  street: z.string(),
  address: z.string(),
  phone: z.string()
} );

export type Address = z.infer<typeof AddressSchema>;

export type AddressDTO = z.infer<typeof AddressDTOSchema>;