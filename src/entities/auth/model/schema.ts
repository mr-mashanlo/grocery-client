import { z } from 'zod';

export const AuthSchema = z.object( {
  id: z.string()
} );

export const CreateAuthSchema = z.object( {
  nickname: z.string().min( 4, 'Nickname must be at least 4 characters long' ),
  password: z.string().min( 8, 'Password must be at least 4 characters long' )
} );

export type Auth = z.infer<typeof AuthSchema>;

export type AuthDTO = z.infer<typeof CreateAuthSchema>;