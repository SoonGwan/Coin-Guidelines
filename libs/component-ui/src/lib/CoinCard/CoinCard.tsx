import React from 'react';
import styled from 'styled-components';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { maxWidthDefine } from '@coin-line/utils';
interface IStyledProps {
	difference: string;
}

const CoinCard = () => {
	const difference = 'up';
	return (
		<CoinCardWrapper>
			<Rank>1</Rank>
			<CoinName>
				BitCoin
				<CoinAlias>BTC</CoinAlias>
			</CoinName>
			<Price>$58,084.43</Price>
			<Price>$58,384.43</Price>
			<AmountDifference difference={difference}>
				{difference === 'up' ? <VscTriangleUp /> : <VscTriangleDown />}
				1.23%
			</AmountDifference>
			<Price>$57,084.43</Price>
		</CoinCardWrapper>
	);
};

export default CoinCard;

const CoinCardWrapper = styled.div`
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
		props.difference === 'up' ? 'green' : 'red'};
	align-items: center;
`;
