import { shortenUrl } from "../controllers/shorten";
import { Router } from "express";

const router: Router = Router();

router.post('/api/shortenUrl', shortenUrl);

export default router;