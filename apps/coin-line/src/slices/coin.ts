import axios from "axios";
import { SERVER } from "../config/config.json";

export const requestCoin = async () => {
	const {
		data: { data: coinData },
	} = await axios.get(`${SERVER}/coin/coin`);

	return coinData;
};

export const requestCoinIdList = async (idList: number[]) => {
	const cryptoIdList = idList.join(",");
	const { data } = await axios.get(
		`${SERVER}/coin/coinIdList?id=${cryptoIdList}`
	);

	return data;
};
