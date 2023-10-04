import mongoose, { InferSchemaType, Schema } from 'mongoose';

const schema = new Schema({
    originalUrl: { type: String, required: true },
    shortenedUrl: { type: String, required: true },
}, { timestamps: true });

type ShortenedUrl = InferSchemaType<typeof schema>;

const ShortenedUrlModel = mongoose.model('ShortenedUrl', schema);

export default ShortenedUrlModel;