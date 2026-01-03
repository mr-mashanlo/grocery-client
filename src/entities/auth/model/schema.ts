import { z } from 'zod';

export const AuthDTOSchema = z.object( {
  nickname: z.string().min( 4, 'Nickname must be at least 4 characters long' ),
  password: z.string().min( 8, 'Password must be at least 4 characters long' )
} );

export const AuthSchema = z.object( {
  id: z.string(),
  token: z.string(),
  expired: z.number()
} );

export type AuthDTO = z.infer<typeof AuthDTOSchema>;

export type Auth = z.infer<typeof AuthSchema>;