import { MoreSelectCard, Modal, KeySelect } from "@coin-line/component-ui";
import React, { Dispatch, SetStateAction, memo } from "react";
import styled from "styled-components";
import GrettingTitle from "../GrettingTitle";

type Props = {
	coinTemp: any;
	crypto: null;
	setCrypto: Dispatch<SetStateAction<null>>;
	handleSelectCrypto: () => void;
	isPress: boolean;
	setIsPress: Dispatch<SetStateAction<boolean>>;
	handlePressModal: () => void;
};

const Main = ({
	coinTemp,
	crypto,
	setCrypto,
	handleSelectCrypto,
	isPress,
	setIsPress,
	handlePressModal,
}: Props) => {
	const [test, setTest] = React.useState(false);
	return (
		<MainWrapper>
			<GrettingTitle
				paddingV={24}
				title="Todays Cryptocurrency Prices by Market Cap"
			/>
			<MoreSelectCard onPress={handlePressModal} />
			<Modal isOpen={isPress} handleDialog={handlePressModal}>
				<KeySelect options={coinTemp} crypto={crypto} setCrypto={setCrypto} />
				<button onClick={handleSelectCrypto}>선택하기</button>
			</Modal>
		</MainWrapper>
	);
};

export default memo(Main);

const MainWrapper = styled.div``;
