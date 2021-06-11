import { Router } from "express";
import coin from "./cryptoMap";
import coinInfo from "./cryptoInfo";
const router = Router();

router.use("/coin", coin, coinInfo);
// router.use("/coin", coinInfo);
export default router;
