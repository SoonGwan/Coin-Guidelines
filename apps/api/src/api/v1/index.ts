import { Router } from "express";
import coin from "./cryptoMap";
const router = Router();

router.use("/coin", coin);

export default router;
