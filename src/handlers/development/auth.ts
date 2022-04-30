// Packages
import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';
import axios, { AxiosResponse } from 'axios';
import querystring, { ParsedUrlQueryInput } from 'querystring';
import { renderToString } from 'react-dom/server';

// Local Imports
import {
  CALLBACK_URL,
  ERROR_MESSAGE_405,
  NODE_ENV,
  SPOTIFY_AUTHORIZATION,
  SPOTIFY_AUTHORIZATION_URL,
  STATE,
} from '../../config';
import { Auth } from '../../components/general/Auth';
import { convertToImageResponse } from '../../services/general';

/**
 * Retrieves access token, for author during development only.
 *
 * @param {VercelRequest} req Request for login URL.
 * @param {VercelResponse} res Response to request.
 */
export default async function (req: VercelRequest, res: VercelResponse) {
  // Block when not in development environment.
  if (NODE_ENV !== 'development') {
    return res.status(405).send(ERROR_MESSAGE_405);
  }

  const GRANT_TYPE = 'authorization_code';
  const CONTENT_TYPE = 'application/x-www-form-urlencoded';

  const {
    code,
    state,
  } = req.query;

  if (code && state && state === STATE) {
    const data: ParsedUrlQueryInput = {
      code,
      redirect_uri: CALLBACK_URL,
      grant_type: GRANT_TYPE,
    };

    const options: Record<string, Record<string, string>> = {
      headers: {
        'Content-Type': CONTENT_TYPE,
        Authorization: SPOTIFY_AUTHORIZATION,
      },
    };

    const response: AxiosResponse<Record<string, string>> = await axios.post(
      `${SPOTIFY_AUTHORIZATION_URL}`,
      querystring.stringify(data),
      options,
    );

    const {
      refresh_token: refreshToken,
    } = response.data;

    // Hey! I'm returning an image!
    convertToImageResponse(res);

    // Generating the component and rendering it
    const text: string = renderToString(Auth({
      refreshToken,
    }));

    return res.send(text);
  }

  throw new Error('Invalid request: State did not match or code not provided.');
}
