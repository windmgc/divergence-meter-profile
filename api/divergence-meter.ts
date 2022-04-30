import {
    VercelRequest,
    VercelResponse,
} from '@vercel/node';

import divergenceMeterHandler from '../src/handlers/divergence-meter/handler';
import { ERROR_MESSAGE_500 } from '../src/config';

export default async function (req: VercelRequest, res: VercelResponse) {
    try {
        return await divergenceMeterHandler(req, res);
    } catch (error) {
        console.error(error);
        return res.status(500).send(ERROR_MESSAGE_500);
    }
}
