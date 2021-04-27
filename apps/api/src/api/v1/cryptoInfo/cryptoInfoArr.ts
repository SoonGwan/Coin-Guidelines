import { Request, Response } from "express";
import { COINMACAP, XCMCPROAPIKEY } from "../../../config/config.json";
import axios from "axios";
import { logger } from "@coin-line/api-util";
export default async (req: Request, res: Response) => {
	const CRYPTO_LIST = req.query.id;
	try {
		const { data } = await axios.get(
			`${COINMACAP}/cryptocurrency/quotes/latest?id=${CRYPTO_LIST}`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": `${XCMCPROAPIKEY}`,
				},
			}
		);
		res.status(200).json({
			message: "success",
			data,
		});
	} catch (err) {
		return err;
	}
};
