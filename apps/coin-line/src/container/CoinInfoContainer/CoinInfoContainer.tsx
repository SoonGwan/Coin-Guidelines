import React, { useCallback, useEffect, useState } from "react";
import CoinInfo from "../../components/CoinInfo";
import { useParams } from "react-router-dom";
import { requestCoinInfo } from "../../slices/coinInfo";

const CoinInfoContainer = () => {
  const { id } = useParams();

  const [infoData, setInfoData] = useState([]);
  const [dayChartData, setDayChartData] = useState({});

  const handleRequestCoinInfo = useCallback(async () => {
    try {
      const { data } = await requestCoinInfo(id);
      console.log("data", data);
      setInfoData(data && data[id]);

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
