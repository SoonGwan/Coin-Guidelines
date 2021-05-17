import { Request, Response } from "express";
import { logger } from "@coin-line/api-util";
import { COINMACAP, XCMCPROAPIKEY } from "../../../config/config.json";
import axios from "axios";

export default async (req: Request, res: Response) => {
  const CRYPTO_ID = Number(req.query.id);
  try {
    const { data } = await axios.get(
      `${COINMACAP}/cryptocurrency/quotes/latest?id=${CRYPTO_ID}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": `${XCMCPROAPIKEY}`,
        },
      }
    );
    logger.green(`Success -> CRYPTO_ID : ${CRYPTO_ID} `);
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (err) {
    logger.red(err);
    return err;
  }
};
