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
    const url = req.body;
    console.log(url);

    const domain = Bun.env.DOMAIN;
    let randomPath = randomString();
    let generatedUrl = `${domain}/${randomPath}`;

    // find existed shortened URLs
    const existedUrl = await ShortenedUrlModel.findOne({ shortenedUrl: generatedUrl });
    if (existedUrl) {
        randomPath = randomString();
        generatedUrl = `${domain}/${randomPath}`;
    }

    // const shortenedUrl = new ShortenedUrlModel({
    //     originalUrl,
    //     shortenedUrl: generatedUrl,
    // });

    // await shortenedUrl.save();

    // return res.status(201).json({
    //     message: 'URL shortened successfully',
    //     shortenedUrl
    // });
}