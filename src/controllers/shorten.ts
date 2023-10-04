import { Request, Response } from 'express';
import ShortenedUrlModel from '../models/shortenUrl';

const randomString = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < 5; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomString;
}

export const shortenUrl = async (req: Request, res: Response) => {
    const { originalUrl } = req.body;

    const domain: string = Bun.env.DOMAIN_STRING!;
    let randomPath = randomString();
    let generatedUrl = `${domain}/${randomPath}`;

    // find existed shortened URLs
    const existedUrl = await ShortenedUrlModel.findOne({ shortenedUrl: generatedUrl });
    if (existedUrl) {
        randomPath = randomString();
        generatedUrl = `${domain}/${randomPath}`;
    }

    const shortenedUrl = new ShortenedUrlModel({
        originalUrl,
        shortenedUrl: generatedUrl,
    });

    await shortenedUrl.save();

    return res.status(201).json({
        message: 'URL shortened successfully',
        shortenedUrl
    });
}

export const redirectUrl = async (req: Request, res: Response) => {
    const { url } = req.body;

    //get long url
    const longUrl = await ShortenedUrlModel.findOne({ shortenedUrl: url });
    if (!longUrl) {
        return res.status(404).json({
            message: 'URL not found'
        });
    }

    return res.status(200).json({originalUrl: longUrl.originalUrl});
};
