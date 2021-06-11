/**
import { CryptoCurrency } from "../../../entitiy/currentCryptocurrency";
import axios from "axios";
import { getRepository } from "typeorm";

export const getCryptoToken = async () => {
	const { data } = await axios.get(
		"https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?start=1",
		{
			headers: {
				"X-CMC_PRO_API_KEY": "3a16711e-21a0-424a-a4c6-5f3d8e96cdd2",
			},
		}
	);

	const cryptoCurrencyRepo = getRepository(CryptoCurrency);
	const values = data.data;

	for (let i = 0; i < values.length; i++) {
		const newEl = cryptoCurrencyRepo.create();
		newEl.id = values[i].id;
		newEl.name = values[i].name;
		newEl.symbol = values[i].symbol;
		newEl.slug = values[i].slug;
		newEl.rank = values[i].rank;
		newEl.is_active = values[i].is_active;
		newEl.first_historical_data = values[i].first_historical_data;
		newEl.last_historical_data = values[i].last_historical_data;
		cryptoCurrencyRepo.save(newEl);
	}

	return data;
}; */
