import { Request, Response } from 'express';
import ShortenedUrlModel from '../models/shortenUrl';
import moment from 'moment';

export const shortenUrl = async (req: Request, res: Response) => {
    const { originalUrl } = req.body;

    const generateUrl = moment().local();

    return res.status(200).json(generateUrl);
}