import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';
import { renderToString } from 'react-dom/server';

import { getDivergence, getPieces } from '../../services/divergence-meter';
import { convertToImageResponse } from '../../services/general';
import { MeterBoard } from '../../components/divergence-meter/meter';

export default async function (req: VercelRequest, res: VercelResponse) {
  const pieceImages: object = await getPieces();
  const divergenceNumbers: object = await getDivergence();

  convertToImageResponse(res);

  const text: string = renderToString(
    MeterBoard({ numbers: divergenceNumbers, pieceImages }),
  );

  return res.send(text);
}
