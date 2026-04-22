import { type KyResponse } from 'ky';

import { kyInstance } from '@/shared/libs';

import { type Auth, type AuthDTO } from '../model/schema';

class AuthService {

  signin = ( data: AuthDTO ): Promise<KyResponse<Auth>> => {
    return kyInstance( 'auth/signin', { method: 'post', body: JSON.stringify( data ) } );
  };

  signup = ( data: AuthDTO ): Promise<KyResponse<Auth>> => {
    return kyInstance( 'auth/signup', { method: 'post', body: JSON.stringify( data ) } );
  };

  me = async (): Promise<KyResponse<Auth>> => {
    return await kyInstance( 'auth/me', { method: 'get', retry: 1 } );
  };

}

export const authService = new AuthService();