import dotenv from 'dotenv';

dotenv.config();

/**
 * Current environment.
 */
export const NODE_ENV: string = process.env.NODE_ENV || 'development';

/**
 * Message for 405 error when not in development environment.
 */
export const ERROR_MESSAGE_405 = 'Endpoint blocked: Not in development environment.';

/**
 * Message for 500 on server error.
 */
export const ERROR_MESSAGE_500 = 'Something went terribly wrong...';

/**
 * Lets Github know we're returning an image.
 */
export const IMAGE_RESPONSE_HEADERS: [string, string] = [
  'Content-Type',
  'image/svg+xml',
];

/**
 * Tells the user when to update the image.
 */
export const CACHE_CONTROL_RESPONSE_HEADERS: [string, string] = [
  'Cache-Control',
  's-maxage=1, stale-while-revalidate',
];
