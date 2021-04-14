import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CryptoCurrency } from "../../../entitiy/currentCryptocurrency";
import { logger } from "@coin-line/api-util";

export default async (req: Request, res: Response) => {
	try {
		const coinRepo = getRepository(CryptoCurrency);
		const coinData = await coinRepo.find();

		logger.yellow("CoinAPI");

		res.status(200).json({
			status: 200,
			message: "CoinData",
			data: { coinData },
		});
	} catch (err) {
		return err;
	}
};
