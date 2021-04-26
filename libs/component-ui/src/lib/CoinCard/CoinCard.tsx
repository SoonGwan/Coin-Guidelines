import React from "react";
import styled from "styled-components";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { maxWidthDefine } from "@coin-line/utils";
import { addDollar, shortHitProfit, shortHitLoss } from "@coin-line/utils";
import { withRouter } from "react-router-dom";
interface IStyledProps {
	difference: string;
}

type Props = {
	name: string;
	symbol: string;
	id: number;
	index: number;
	buyCryptoValue: string;
	handleCryptoInfo: (id: number) => void;
};

const CoinCard = ({
	name,
	symbol,
	id,
	index,
	buyCryptoValue,
	handleCryptoInfo,
}: Props) => {
	const difference = "up";
	return (
		<CoinCardWrapper onClick={() => handleCryptoInfo(id)}>
			<Rank>{index}</Rank>
			<CoinName>
				{name}
				<CoinAlias>{symbol}</CoinAlias>
			</CoinName>
			<Price>$58,084.43</Price>
			<Price>{shortHitProfit(buyCryptoValue, 15)}</Price>
			<Price>{addDollar(buyCryptoValue)}</Price>
			<Price>{shortHitLoss(buyCryptoValue, 5)}</Price>

			<AmountDifference difference={difference}>
				{difference === "up" ? <VscTriangleUp /> : <VscTriangleDown />}
				1.23%
			</AmountDifference>
		</CoinCardWrapper>
	);
};

export default CoinCard;

export const CoinCardWrapper = styled.div`
	${maxWidthDefine(1370)}
	height: 80px;
	border-top: 1px solid ${({ theme }) => theme.basicBorderColor};
	display: flex;
	align-items: center;
	font-size: 14px;
`;

const Rank = styled.div`
	${maxWidthDefine(26)}
`;

const CoinName = styled.div`
	${maxWidthDefine(221)}
	display: flex;
`;

const CoinAlias = styled.div`
	margin-left: 6px;
	color: rgb(128, 138, 157);
`;

const Price = styled.div`
	${maxWidthDefine(92)}
`;

const AmountDifference = styled.div`
	${maxWidthDefine(74)}
	display: flex;
	color: ${(props: IStyledProps) =>
		props.difference === "up" ? "green" : "red"};
	align-items: center;
`;
