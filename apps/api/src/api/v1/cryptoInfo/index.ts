import { Router } from "express";
import coinInfo from "./cryptoInfo";
import coinInfoArr from "./cryptoInfoArr";
const router = Router();

router.get("/coinInfo", coinInfo);
router.get("/coinIdList", coinInfoArr);

export default router;
