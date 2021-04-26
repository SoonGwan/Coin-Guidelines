import React, { useCallback, useEffect, useState } from "react";
import CoinInfo from "../../components/CoinInfo";
import { useParams } from "react-router-dom";
import { requestCoinInfo } from "../../slices/coinInfo";
// import data from "./mock.json";

const CoinInfoContainer = () => {
	const { id } = useParams();

	const [infoData, setInfoData] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);

	const handleRequestCoinInfo = useCallback(async () => {
		try {
			const { data } = await requestCoinInfo(id);
			console.log("data", data);
			setInfoData(data && data[id]);
		} catch (err) {
			return err;
		}
	}, [id]);

	useEffect(() => {
		handleRequestCoinInfo();
	}, [handleRequestCoinInfo]);

	return <CoinInfo info={infoData} />;
};

export default CoinInfoContainer;
