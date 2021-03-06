import React, { memo } from "react";
import dtil from "dtil";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import styled from "styled-components";
import { addDollar } from "@coin-line/utils";
import { Line, Pie } from "@ant-design/charts";
import { percentCalculationResult } from "@coin-line/utils";
import { quoteUSDType, coinData } from "@coin-line/api-interfaces";

interface RisingProps {
  isRising: boolean;
}

type Props = {
  info: coinData;
  dayChartData: quoteUSDType;
};

const CoinInfo = ({ info, dayChartData }: Props) => {
  const { name, symbol, cmc_rank } = info;
  const USD_OBJ = info.quote !== undefined && info.quote.USD;
  const change_90d = new Date();
  const change_60d = new Date();
  const change_30d = new Date();
  const change_7d = new Date();
  const change_24h = new Date();

  const risingPercent = USD_OBJ && USD_OBJ.percent_change_24h.toFixed(3);

  const dayChartData_TEMP = [
    {
      date: dtil(
        new Date(change_90d.setMonth(change_90d.getMonth() - 3)).toString()
      ).format("YYYY-MM-DD"),
      value: percentCalculationResult({
        totalValue: dayChartData.price,
        percentValue: dayChartData.percent_change_90d,
      }),
    },
    {
      date: dtil(
        new Date(change_60d.setMonth(change_60d.getMonth() - 2)).toString()
      ).format("YYYY-MM-DD"),
      value: percentCalculationResult({
        totalValue: dayChartData.price,
        percentValue: dayChartData.percent_change_60d,
      }),
    },
    {
      date: dtil(
        new Date(change_30d.setMonth(change_30d.getMonth() - 1)).toString()
      ).format("YYYY-MM-DD"),
      value: percentCalculationResult({
        totalValue: dayChartData.price,
        percentValue: dayChartData.percent_change_30d,
      }),
    },
    {
      date: dtil(
        new Date(change_7d.setDate(change_7d.getDate() - 7)).toString()
      ).format("YYYY-MM-DD"),
      value: percentCalculationResult({
        totalValue: dayChartData.price,
        percentValue: dayChartData.percent_change_7d,
      }),
    },
    {
      date: dtil(
        new Date(change_24h.setDate(change_24h.getDate() - 1)).toString()
      ).format("YYYY-MM-DD"),
      value: percentCalculationResult({
        totalValue: dayChartData.price,
        percentValue: dayChartData.percent_change_24h,
      }),
    },
    {
      date: "????????? ???",
      value: percentCalculationResult({
        totalValue: dayChartData.price,
        percentValue: dayChartData.percent_change_1h,
      }),
    },
  ];

  const supplyData_TEMP = [
    {
      name: "?????? ?????????",
      value: Math.floor(info.max_supply) || null,
    },
    {
      name: "?????? ?????????",
      value: Math.floor(info.total_supply) || 0,
    },
  ];

  console.log(
    "info.max_supplyinfo.max_supplyinfo.max_supplyinfo.max_supply",
    info.max_supply !== null,
    info.max_supply
  );

  const PERCENT_CRYPTO_TITLE =
    Number(risingPercent) < 0 ? (
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
    Number(risingPercent) < 0 ? (
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

  const circleChartConfig = {
    data: supplyData_TEMP,
    width: 400,
    height: 400,
    autoFit: false,
    angleField: "value",
    colorField: "name",
    radius: 0.9,
    label: {
      type: "inner",
      // offset: "-30%",
      // content: function content(_ref: any) {
      //   const percent = _ref.percent;
      //   return "".concat(percent, "%");
      // },
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    // interactions: [{ type: "element-active" }],
  };

  const config = {
    data: dayChartData_TEMP,
    width: 800,
    height: 400,
    autoFit: false,
    xField: "date",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  };
  return (
    <CoinInfoWrapper>
      <CryptoTopWrapper>
        <CryptoNameWrapper>
          <CryptoName>
            {name}
            <CtyptoSymbolTag>{symbol}</CtyptoSymbolTag>
          </CryptoName>
          <CryproInitialTagWrapper>
            <CryptoRankTag>#{cmc_rank}???</CryptoRankTag>
            {info.tags !== undefined &&
              info.tags.map((data) => {
                return <CryptoInitialTag key={data}>{data}</CryptoInitialTag>;
              })}
          </CryproInitialTagWrapper>
        </CryptoNameWrapper>
        <CryptoPriceWrapper>
          <CryptoHeaderName>
            {name} ?????? ({symbol})
          </CryptoHeaderName>
          <CryptoPrice>
            {addDollar(USD_OBJ.price)}
            {PERCENT_CRYPTO_TITLE}
          </CryptoPrice>
          <hr />
          <CryptoStateItemWrapper>
            <CryptoStateBlockWrapper>
              <CryproStateBlock>max_supply</CryproStateBlock>
              <CryptoStateBlockAmount>
                {info.max_supply || "?????? ??????"}
              </CryptoStateBlockAmount>
            </CryptoStateBlockWrapper>
            <CryptoStateBlockWrapper>
              <CryproStateBlock>total_supply</CryproStateBlock>
              <CryptoStateBlockAmount>
                {info.total_supply || "????????? ??? ??????"}
              </CryptoStateBlockAmount>
              {PERCENT_CRYPTO_BLOCK_AMOUNT}
            </CryptoStateBlockWrapper>
            <CryptoStateBlockWrapper>
              <CryproStateBlock>volume_24h</CryproStateBlock>
              <CryptoStateBlockAmount>
                {addDollar(USD_OBJ.volume_24h)}
              </CryptoStateBlockAmount>
              {USD_OBJ.volume_24h === 0 ? null : PERCENT_CRYPTO_BLOCK_AMOUNT}
            </CryptoStateBlockWrapper>
          </CryptoStateItemWrapper>
        </CryptoPriceWrapper>
      </CryptoTopWrapper>
      <ChartWrapper>
        <Line {...config} />
        {info.max_supply !== undefined && info.max_supply !== null && (
          <Pie {...circleChartConfig} />
        )}
      </ChartWrapper>
    </CoinInfoWrapper>
  );
};

export default memo(CoinInfo);

const ChartWrapper = styled.div`
  display: flex;
`;

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
