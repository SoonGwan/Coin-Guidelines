import { Router } from "express";
import coin from "./Coin";

const router = Router();

router.get("/coin", coin);

export default router;
