import { MoreSelectCard, Modal } from "@coin-line/component-ui";
import React from "react";
import styled from "styled-components";
import GrettingTitle from "../GrettingTitle";

type Props = {
	coinsList: any;
};
const Main = ({ coinsList }: Props) => {
	const [test, setTest] = React.useState(false);
	return (
		<MainWrapper>
			<GrettingTitle
				paddingV={24}
				title="Todays Cryptocurrency Prices by Market Cap"
			/>
			<MoreSelectCard onPress={() => setTest(!test)} />
			<Modal isOpen={test} handleDialog={() => setTest(!test)}>
				<div>hi?</div>
			</Modal>
		</MainWrapper>
	);
};

export default Main;

const MainWrapper = styled.div``;
