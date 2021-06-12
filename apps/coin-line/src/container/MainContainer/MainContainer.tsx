import React, { useCallback, useEffect, useState, ChangeEvent } from "react";
import Main from "../../components/Main";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  coinDataListSelector,
  coinIdList,
  selectCrypto,
} from "../../atom/Crypto.atom";
import { useHistory } from "react-router-dom";
import { requestCoin, requestCoinIdList } from "../../slices/coin";

export type Options = {
  name: string;
  value: number;
};

const MainContainer = () => {
  const [crypto, setCrypto] = useState(null);
  const [isPress, setIsPress] = useState(false);
  const [buyCryptoValue, setBuyCryptoValue] = useState<string>();
  const [, setSelectCrypto] = useRecoilState(selectCrypto);
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setCoinIdList] = useRecoilState(coinIdList);
  const history = useHistory();
  const coinListId = useRecoilValue(selectCrypto);
  const coinListDataResponse = useRecoilValue(coinDataListSelector({}));
  const coinTemp = [] as Options[];

  const handleRequestCoin = useCallback(async () => {
    setCoinData(coinListDataResponse.coinData);
  }, []);

  coinData.map((data) => {
    const { name, symbol, id } = data;
    const temp = { name: `${name} / (${symbol})`, value: id };
    coinTemp.push(temp);
  });

  const handlePressModal = useCallback(() => {
    setIsPress(!isPress);
  }, [isPress]);

  const handleSelectCrypto = useCallback(() => {
    if (coinData !== undefined && crypto !== null) {
      const temp = {
        ...coinData.find((args) => args.id === crypto),
        buyCryptoValue,
      };

      setSelectCrypto((prev) => [...prev, temp]);

      handlePressModal();

      window.location.reload();
    }
    // TODO: 여기에 들어갈 토스트 알림이 있어야 함
  }, [buyCryptoValue, coinData, crypto, handlePressModal, setSelectCrypto]);

  const onChangeRequest = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBuyCryptoValue(e.target.value);
  }, []);

  const handleCryptoInfo = useCallback(
    (id: number) => {
      history.push(`coinInfo/${id}`);
    },
    [history]
  );

  const handleRequestCoinIdList = useCallback(async () => {
    setIsLoading(true);
    try {
      let cryptoIdList = [] as any;
      for (const coins in coinListId) {
        cryptoIdList = [...cryptoIdList, coinListId[coins].id];
      }

      const {
        data: { data },
      } = await requestCoinIdList(cryptoIdList);

      for (const coins in data) {
        setCoinIdList((prev) => [
          ...prev,
          { price: data[coins].quote.USD.price, id: data[coins].id },
        ]);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      return err;
    }
  }, [coinListId, setCoinIdList]);

  useEffect(() => {
    handleRequestCoin();
    handleRequestCoinIdList();
  }, [handleRequestCoin, handleRequestCoinIdList]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <Main
          handleCryptoInfo={handleCryptoInfo}
          coinTemp={coinTemp}
          crypto={crypto}
          setCrypto={setCrypto}
          handleSelectCrypto={handleSelectCrypto}
          isPress={isPress}
          setIsPress={setIsPress}
          handlePressModal={handlePressModal}
          buyCryptoValue={buyCryptoValue}
          onChangeRequest={onChangeRequest}
          handleRequestCoinIdList={handleRequestCoinIdList}
        />
      )}
    </>
  );
};

export default MainContainer;
