import { type KyResponse } from 'ky';

import { kyInstance } from '@/shared/libs';

import { type Auth, type AuthDTO } from '../model/schema';

class AuthService {

  signin = ( data: AuthDTO ): Promise<KyResponse<Auth>> => {
    return kyInstance.post( 'auth/signin', { json: data } );
  };

  signup = ( data: AuthDTO ): Promise<KyResponse<Auth>> => {
    return kyInstance.post( 'auth/signup', { json: data } );
  };

  me = async (): Promise<KyResponse<Auth>> => {
    return kyInstance.get( 'auth/me' );
  };

}

export const authService = new AuthService();