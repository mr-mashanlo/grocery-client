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
          if ( _response.status === 498 ) {
            throw new UnauthorizedError();
          }
          if ( _response.status === 499 ) {
            await ky.get( `${import.meta.env.VITE_BACK_URL}/auth/refresh`, { credentials: 'include' } );
          }
        } catch {
          throw new UnauthorizedError();
        }
      }
    ]

  }
} );