import axios from "axios";
import { SERVER } from "../config/config.json";

export const requestCoinInfo = async (id: number) => {
	const {
		data: { data },
	} = await axios.get(`${SERVER}/coin/coinInfo?id=${id}`);
	return data;
};
