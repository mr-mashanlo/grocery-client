import { authService } from '../api/api';
import { type AuthDTO } from './schema';

export const useAuth = () => {

  const signin = ( data: AuthDTO ) => authService.signin( data );

  const signup = ( data: AuthDTO ) => authService.signup( data );

  const signout = () => authService.signout();

  const refresh = () => authService.refresh();

  return { signin, signup, signout, refresh };

};