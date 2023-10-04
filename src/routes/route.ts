import { shortenUrl } from "../controllers/shorten";
import express from "express";

const router = express.Router();

router.post('/api/shortenUrl', shortenUrl);

export default router;