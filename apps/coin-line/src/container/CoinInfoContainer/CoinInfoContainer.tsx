import React, { useCallback, useEffect, useState } from "react";
import CoinInfo from "../../components/CoinInfo";
import { useParams } from "react-router-dom";
import { requestCoinInfo } from "../../slices/coinInfo";
import { quoteUSDType, coinData } from "@coin-line/api-interfaces";
import { useRecoilValue } from "recoil";
import { coinInfoDataSelector } from "../../atom/Crypto.atom";
const CoinInfoContainer = () => {
  const { id } = useParams();

  const [infoData, setInfoData] = useState<coinData>({});
  const [dayChartData, setDayChartData] = useState<quoteUSDType>({});
  const coinInfoResponse = useRecoilValue(coinInfoDataSelector(id));

  const handleRequestCoinInfo = useCallback(async () => {
    setInfoData(coinInfoResponse.data[id]);
    setDayChartData(coinInfoResponse.data[id].quote.USD);
  }, [id]);

  useEffect(() => {
    handleRequestCoinInfo();
  }, [handleRequestCoinInfo]);

  return <CoinInfo info={infoData} dayChartData={dayChartData} />;
};

export default CoinInfoContainer;
