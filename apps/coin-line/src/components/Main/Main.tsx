import {
	MoreSelectCard,
	Modal,
	KeySelect,
	CoinCard,
} from "@coin-line/component-ui";
import React, { Dispatch, SetStateAction, memo, ChangeEvent } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectCrypto } from "../../atom/Crypto.atom";
import GrettingTitle from "../GrettingTitle";

type Props = {
	coinTemp: any;
	crypto: null;
	setCrypto: Dispatch<SetStateAction<null>>;
	handleSelectCrypto: () => void;
	isPress: boolean;
	setIsPress: Dispatch<SetStateAction<boolean>>;
	handlePressModal: () => void;
	buyCryptoValue: string;
	onChangeRequest: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Main = ({
	coinTemp,
	crypto,
	setCrypto,
	handleSelectCrypto,
	isPress,
	setIsPress,
	handlePressModal,
	buyCryptoValue,
	onChangeRequest,
}: Props) => {
	const cryptoValue = useRecoilValue(selectCrypto);

	return (
		<MainWrapper>
			<GrettingTitle
				paddingV={24}
				title="Todays Cryptocurrency Prices by Market Cap"
			/>
			{cryptoValue &&
				cryptoValue.map((data, index) => {
					const {
						first_historical_data,
						id,
						is_acive,
						last_historical_data,
						name,
						rank,
						slug,
						symbol,
						buyCryptoValue,
					} = data;
					return (
						<CoinCard
							key={index}
							name={name}
							symbol={symbol}
							id={id}
							index={index + 1}
							buyCryptoValue={buyCryptoValue}
						/>
					);
				})}

			<MoreSelectCard onPress={handlePressModal} />
			<Modal isOpen={isPress} handleDialog={handlePressModal}>
				<KeySelect options={coinTemp} crypto={crypto} setCrypto={setCrypto} />
				<input
					type="text"
					value={buyCryptoValue}
					onChange={(e) => onChangeRequest(e)}
				/>
				<button onClick={handleSelectCrypto}>선택하기</button>
			</Modal>
		</MainWrapper>
	);
};

export default Main;

const MainWrapper = styled.div``;
