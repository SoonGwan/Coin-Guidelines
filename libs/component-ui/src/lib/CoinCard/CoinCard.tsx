import React, { memo, useMemo } from "react";
import styled from "styled-components";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { maxWidthDefine } from "@coin-line/utils";
import { addDollar, shortHitProfit, shortHitLoss } from "@coin-line/utils";
import { Link } from "react-router-dom";
import { darken, lighten } from "polished";
interface IStyledProps {
	isRising: boolean;
}

type Props = {
	name: string;
	symbol: string;
	id: number;
	index: number;
	buyCryptoValue: string;
	handleCryptoInfo: (id: number) => void;
	cryptoPrice: number;
};

const CoinCard = ({
	name,
	symbol,
	id,
	index,
	buyCryptoValue,
	handleCryptoInfo,
	cryptoPrice,
}: Props) => {
	// const calcPrice = (val1, val2) => {};

	const price = useMemo(() => {
		// if (Number(cryptoPrice) < Number(buyCryptoValue)) {
		// 	const a =
		// }
	}, []);
	console.log(
		((Number(buyCryptoValue) - cryptoPrice) / Number(buyCryptoValue)) * 100
	);
	return (
		// <Link to={`/coinInfo/${id}`}>
		<CoinCardWrapper onClick={() => handleCryptoInfo(id)}>
			<Rank>{index}</Rank>
			<CoinName>
				{name}
				<CoinAlias>{symbol}</CoinAlias>
			</CoinName>
			<Price>{addDollar(cryptoPrice)}</Price>
			{/* 현재 금액 */}
			<Price>{shortHitProfit(buyCryptoValue, 15)}</Price>
			{/* 우리가 산 금액 애 15퍼 이익 */}
			<Price>{addDollar(buyCryptoValue)}</Price>
			{/* 우리가 산 금액 */}
			<Price>{shortHitLoss(buyCryptoValue, 5)}</Price>
			{/* 우리가 팔 금액 */}
			{/* <AmountDifference isRising={true}>
				{difference === "up" ? <VscTriangleUp /> : <VscTriangleDown />}
				1.23%
			</AmountDifference> */}
		</CoinCardWrapper>
		// </Link>
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
	cursor: pointer;
	transition: all 0.25s ease;
	&:hover {
		background-color: ${darken(0.05, "#fff")};
	}
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
	color: ${(props: IStyledProps) => (props.isRising ? "#16c784" : "#ea3943")};
	align-items: center;
`;
