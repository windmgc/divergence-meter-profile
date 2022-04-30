import {
  VercelRequest,
  VercelResponse,
} from '@vercel/node';
import { renderToString } from 'react-dom/server';

import { getPieces } from '../../services/divergence-meter';
import { convertToImageResponse } from '../../services/general';
import { MeterBoard } from '../../components/divergence-meter/meter';

const NUMBERS: string[] = [
  '1',
];

export default async function (req: VercelRequest, res: VercelResponse) {
  const pieceImages: object = await getPieces();

  convertToImageResponse(res);

  const text: string = renderToString(
    MeterBoard({ numbers: NUMBERS, pieceImages }),
  );

  return res.send(text);
}
