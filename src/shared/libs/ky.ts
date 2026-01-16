import ky from 'ky';

export class UnauthorizedError extends Error {}

export const kyInstance = ky.create( {
  prefixUrl: import.meta.env.VITE_BACK_URL,
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  retry: {
    limit: 1,
    statusCodes: [ 499, 400 ],
    methods: [ 'get', 'post', 'put', 'delete' ]
  },
  hooks: {

    afterResponse: [
      async ( _request, _options, _response ) => {
        try {
          if ( _response.status !== 499 ) return;
          await ky.get( `${import.meta.env.VITE_BACK_URL}/auth/refresh`, { credentials: 'include', headers: { 'Content-Type': 'application/json' } } );
        } catch {
          throw new UnauthorizedError();
        }
      }
    ]

  }
} );