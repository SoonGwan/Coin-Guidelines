import React, { useCallback, useEffect, useState } from "react";
import Main from "../../components/Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins, coinSelector } from "../../slices/coin";
export type Options = {
	name: string;
	value: number;
};

const MainContainer = () => {
	const [crypto, setCrypto] = useState(null);
	const [isPress, setIsPress] = useState(false);

	const dispatch = useDispatch();
	const { coins, loading, hasError } = useSelector(coinSelector);
	const { coinData } = coins;

	let coinTemp = [] as Options[];
	coinData &&
		coinData.map((data) => {
			const { name, symbol, id } = data;
			const temp = { name: `${name} / (${symbol})`, value: id };
			coinTemp = coinTemp.concat(temp);
		});

	const handlePressModal = useCallback(() => {
		setIsPress(!isPress);
	}, [isPress]);

	const handleSelectCrypto = useCallback(() => {
		if (coinData !== undefined && crypto !== null) {
			console.log(coinData.find((args) => args.id === crypto));
		}
		handlePressModal();
		// TODO: 여기에 들어갈 토스트 알림이 있어야 함
	}, [coinData, crypto, handlePressModal]);

	useEffect(() => {
		dispatch(fetchCoins());
	}, [dispatch]);

	return (
		<Main
			coinTemp={coinTemp}
			crypto={crypto}
			setCrypto={setCrypto}
			handleSelectCrypto={handleSelectCrypto}
			isPress={isPress}
			setIsPress={setIsPress}
			handlePressModal={handlePressModal}
		/>
	);
};

export default MainContainer;
