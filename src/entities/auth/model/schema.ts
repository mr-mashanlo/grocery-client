import { z } from 'zod';

export const AuthSchema = z.object( {
  id: z.string()
} );

export const CreateAuthSchema = z.object( {
  nickname: z.string().min( 3, 'Nickname must be ≥ 3 characters' ),
  password: z.string().min( 8, 'Password must be ≥ 8 characters' )
} );

export type Auth = z.infer<typeof AuthSchema>;

export type AuthDTO = z.infer<typeof CreateAuthSchema>;