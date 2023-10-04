import { redirectUrl, shortenUrl } from "../controllers/shorten";
import { Router } from "express";

const router: Router = Router();

router.post('/api/shortenUrl', shortenUrl);
router.post('/api/originalUrl', redirectUrl);

export default router;