import React, { useCallback, useEffect, useState } from "react";
import CoinInfo from "../../components/CoinInfo";
import { useParams } from "react-router-dom";
import { requestCoinInfo } from "../../slices/coinInfo";
import { quoteUSDType, coinData } from "@coin-line/api-interfaces";
const CoinInfoContainer = () => {
  const { id } = useParams();

  const [infoData, setInfoData] = useState<coinData>({});
  const [dayChartData, setDayChartData] = useState<quoteUSDType>({});

  const handleRequestCoinInfo = useCallback(async () => {
    try {
      const { data } = await requestCoinInfo(id);
      console.log("data", data);
      setInfoData(data && data[id]);
      console.log(data && data[id]);
      setDayChartData(data && data[id].quote.USD);
    } catch (err) {
      return err;
    }
  }, [id]);
  console.log(dayChartData);

  useEffect(() => {
    handleRequestCoinInfo();
  }, [handleRequestCoinInfo]);

  return <CoinInfo info={infoData} dayChartData={dayChartData} />;
};

export default CoinInfoContainer;
