import ky from 'ky';

export class UnauthorizedError extends Error {}

export const kyInstance = ky.create( {
  prefixUrl: import.meta.env.VITE_BACK_URL,
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  retry: { limit: 1 }
} );