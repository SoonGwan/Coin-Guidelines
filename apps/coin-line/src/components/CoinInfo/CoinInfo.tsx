import React, { useMemo } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import styled from "styled-components";
import { addDollar } from "@coin-line/utils";

interface RisingProps {
	isRising: boolean;
}

type Props = {
	info: any;
};

const CoinInfo = ({ info }: Props) => {
	const { name, symbol, cmc_rank } = info;
	const USD_OBJ = info.quote !== undefined && info.quote.USD;

	const risingPercent = USD_OBJ && USD_OBJ.percent_change_24h.toFixed(3);

	const PERCENT_CRYPTO_TITLE =
		risingPercent < 0 ? (
			<Risingfalling isRising={false}>
				<VscTriangleDown />
				{risingPercent}%
			</Risingfalling>
		) : (
			<Risingfalling isRising={true}>
				<VscTriangleUp />
				{risingPercent}%
			</Risingfalling>
		);

	const PERCENT_CRYPTO_BLOCK_AMOUNT =
		risingPercent < 0 ? (
			<CryptoStateBlockRising isRising={false}>
				<VscTriangleDown />
				{risingPercent}%
			</CryptoStateBlockRising>
		) : (
			<CryptoStateBlockRising isRising={true}>
				<VscTriangleUp />
				{risingPercent}%
			</CryptoStateBlockRising>
		);

	return (
		<CoinInfoWrapper>
			<CryptoTopWrapper>
				<CryptoNameWrapper>
					<CryptoName>
						{name}
						<CtyptoSymbolTag>{symbol}</CtyptoSymbolTag>
					</CryptoName>
					<CryproInitialTagWrapper>
						<CryptoRankTag>#{cmc_rank}위</CryptoRankTag>
						{info.tags !== undefined &&
							info.tags.map((data) => {
								return <CryptoInitialTag key={data}>{data}</CryptoInitialTag>;
							})}
					</CryproInitialTagWrapper>
				</CryptoNameWrapper>
				<CryptoPriceWrapper>
					<CryptoHeaderName>
						{name} 가격 ({symbol})
					</CryptoHeaderName>
					<CryptoPrice>
						{addDollar(USD_OBJ.price)}
						{PERCENT_CRYPTO_TITLE}
					</CryptoPrice>
					<hr />
					<CryptoStateItemWrapper>
						<CryptoStateBlockWrapper>
							<CryproStateBlock>max_supply</CryproStateBlock>
							<CryptoStateBlockAmount>{info.max_supply}</CryptoStateBlockAmount>
						</CryptoStateBlockWrapper>
						<CryptoStateBlockWrapper>
							<CryproStateBlock>total_supply</CryproStateBlock>
							<CryptoStateBlockAmount>
								{info.total_supply}
							</CryptoStateBlockAmount>
							{PERCENT_CRYPTO_BLOCK_AMOUNT}
						</CryptoStateBlockWrapper>
						<CryptoStateBlockWrapper>
							<CryproStateBlock>volume_24h</CryproStateBlock>
							<CryptoStateBlockAmount>
								{addDollar(USD_OBJ.volume_24h)}
							</CryptoStateBlockAmount>
							{PERCENT_CRYPTO_BLOCK_AMOUNT}
						</CryptoStateBlockWrapper>
						{/* <CryptoStateBlockWrapper>
							<CryproStateBlock>최대 공급량</CryproStateBlock>
							<CryptoStateBlockAmount>21,000,000</CryptoStateBlockAmount>
							{PERCENT_CRYPTO_BLOCK_AMOUNT}
						</CryptoStateBlockWrapper> */}
					</CryptoStateItemWrapper>
				</CryptoPriceWrapper>
			</CryptoTopWrapper>
		</CoinInfoWrapper>
	);
};

export default CoinInfo;

const CoinInfoWrapper = styled.div`
	margin-top: 30px;
	width: 100%;
	max-width: 1370px;
`;

const CryptoTopWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const CryptoNameWrapper = styled.div`
	width: 33%;
`;

const CryptoName = styled.div`
	font-size: 32px;
	line-height: 42px;
	margin-right: 8px;
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const CtyptoSymbolTag = styled.div`
	background-color: #eff2f5;
	color: #58667e;
	border-radius: 4px;
	padding: 2px 6px;
	font-size: 12px;
	font-weight: 600;
	line-height: 18px;
	margin-left: 12px;
	margin-right: 6px;
`;

const CryproInitialTagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 4px;
	& > * {
		margin-right: 10px;
		margin-bottom: 10px;
	}
`;

const CryptoInitialTag = styled.div`
	background-color: #eff2f5;
	color: #58667e;
	border-radius: 4px;
	padding: 2px 6px;
	font-size: 12px;
	font-weight: 600;
	line-height: 18px;
`;

const CryptoRankTag = styled(CryptoInitialTag)`
	background-color: #808a9d;
	color: #fff;
`;

const CryptoPriceWrapper = styled.div`
	width: 55%;
	/* background-color: red; */
`;

const CryptoHeaderName = styled.div`
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	color: #58667e;
`;

const CryptoPrice = styled.div`
	font-size: 32px;
	font-weight: 700;
	line-height: 42px;
	margin-right: 16px;
	display: flex;
	align-items: center;
	margin-bottom: 14px;
`;

const Risingfalling = styled.div<RisingProps>`
	background-color: ${(props) => (props.isRising ? "#16c784" : "#ea3943")};
	/* # */
	/* width: 76px; */
	color: rgb(255, 255, 255);
	padding: 4px 10px;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 10px;
	height: 20px;
`;

const CryptoStateItemWrapper = styled.div`
	width: 100%;
	display: flex;
	/* & {
		border-left: 1px solid #eff2f5;
	} */
`;

const CryptoStateBlockWrapper = styled.div`
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	width: 25%;
	& > * {
		margin-bottom: 6px;
	}
`;

const CryproStateBlock = styled.div`
	color: #58667e;
`;

const CryptoStateBlockAmount = styled.div`
	color: black;
`;

const CryptoStateBlockRising = styled.div<RisingProps>`
	color: ${(props) => (props.isRising ? "#16c784" : "#ea3943")};
	font-size: 14px;
	font-weight: 600;
	display: flex;
	align-items: center;
`;
