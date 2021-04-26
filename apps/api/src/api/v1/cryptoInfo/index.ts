import { Router } from "express";
import coinInfo from "./cryptoInfo";

const router = Router();

router.get("/coinInfo", coinInfo);

export default router;
