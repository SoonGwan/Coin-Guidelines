import React, { useCallback, useEffect, useState } from "react";
import CoinInfo from "../../components/CoinInfo";
import { useParams } from "react-router-dom";
import { requestCoinInfo } from "../../slices/coinInfo";
// import data from "./mock.json";

const CoinInfoContainer = () => {
  const { id } = useParams();

  const [infoData, setInfoData] = useState([]);
  const [dayChartData, setDayChartData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  const handleRequestCoinInfo = useCallback(async () => {
    try {
      const { data } = await requestCoinInfo(id);
      console.log("data", data);
      setInfoData(data && data[id]);
      const USD_PRICE = data && data[id].quote.USD;
      console.log(USD_PRICE.price);
      const USD_PRICE_TEMP = [
        { percent_change_90d: USD_PRICE.percent_change_90d },
        { percent_change_60d: USD_PRICE.percent_change_60d },
        { percent_change_30d: USD_PRICE.percent_change_30d },
        { percent_change_7d: USD_PRICE.percent_change_7d },
        { percent_change_24h: USD_PRICE.percent_change_24h },
        { percent_change_1h: USD_PRICE.percent_change_1h },
      ];
      console.log(USD_PRICE_TEMP);
      setDayChartData(USD_PRICE_TEMP);
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
