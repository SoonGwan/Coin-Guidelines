import React, { useCallback, useEffect, useState, ChangeEvent } from "react";
import Main from "../../components/Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins, coinSelector } from "../../slices/coin";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectCrypto } from "../../atom/Crypto.atom";
import { useHistory } from "react-router-dom";

export type Options = {
	name: string;
	value: number;
};

const MainContainer = () => {
	const [crypto, setCrypto] = useState(null);
	const [isPress, setIsPress] = useState(false);
	const [buyCryptoValue, setBuyCryptoValue] = useState<string>();
	const [, setSelectCrypto] = useRecoilState(selectCrypto);
	const dispatch = useDispatch();
	const { coins, loading, hasError } = useSelector(coinSelector);
	const { coinData } = coins;
	const history = useHistory();

	const coinTemp = [] as Options[];

	coinData &&
		coinData.map((data) => {
			const { name, symbol, id } = data;
			const temp = { name: `${name} / (${symbol})`, value: id };
			coinTemp.push(temp);
		});

	const handlePressModal = useCallback(() => {
		setIsPress(!isPress);
	}, [isPress]);

	const handleSelectCrypto = useCallback(() => {
		console.log(buyCryptoValue);
		if (coinData !== undefined && crypto !== null) {
			console.log(crypto);
			const temp = {
				...coinData.find((args) => args.id === crypto),
				buyCryptoValue,
			};
			setSelectCrypto((prev) => [...prev, temp]);

			handlePressModal();
		}
		// TODO: 여기에 들어갈 토스트 알림이 있어야 함
	}, [buyCryptoValue, coinData, crypto, handlePressModal, setSelectCrypto]);

	const onChangeRequest = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setBuyCryptoValue(e.target.value);
	}, []);

	const handleCryptoInfo = useCallback(
		(id: number) => {
			history.push(`coinInfo/${id}`);
		},
		[history]
	);

	useEffect(() => {
		dispatch(fetchCoins());
	}, [dispatch]);

	return (
		<Main
			handleCryptoInfo={handleCryptoInfo}
			coinTemp={coinTemp}
			crypto={crypto}
			setCrypto={setCrypto}
			handleSelectCrypto={handleSelectCrypto}
			isPress={isPress}
			setIsPress={setIsPress}
			handlePressModal={handlePressModal}
			buyCryptoValue={buyCryptoValue}
			onChangeRequest={onChangeRequest}
		/>
	);
};

export default MainContainer;
