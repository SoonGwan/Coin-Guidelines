import {
  MoreSelectCard,
  Modal,
  KeySelect,
  CoinCard,
} from "@coin-line/component-ui";
import React, {
  Dispatch,
  SetStateAction,
  memo,
  ChangeEvent,
  useEffect,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { coinIdList, selectCrypto } from "../../atom/Crypto.atom";
import GrettingTitle from "../GrettingTitle";

type Props = {
  coinTemp: any;
  crypto: null;
  setCrypto: Dispatch<SetStateAction<null>>;
  handleSelectCrypto: () => void;
  isPress: boolean;
  setIsPress: Dispatch<SetStateAction<boolean>>;
  handlePressModal: () => void;
  buyCryptoValue: string;
  onChangeRequest: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCryptoInfo: (id: number) => void;
  handleRequestCoinIdList: any;
};

const Main = ({
  coinTemp,
  crypto,
  setCrypto,
  handleSelectCrypto,
  isPress,
  setIsPress,
  handlePressModal,
  buyCryptoValue,
  onChangeRequest,
  handleCryptoInfo,
  handleRequestCoinIdList,
}: Props) => {
  const [cryptoValue, setCryptoValue] = useRecoilState(selectCrypto);
  const coinIdListRecoilValue = useRecoilValue(coinIdList);
  const coinIdListValue = coinIdListRecoilValue;
  console.log(cryptoValue);
  const handleDeleteCoinList = (id, e) => {
    e.preventDefault();
    e.stopPropagation();

    setCryptoValue(cryptoValue.filter((args) => args.id !== id));
  };

  return (
    <MainWrapper>
      <GrettingTitle
        paddingV={24}
        title="Todays Cryptocurrency Prices by Market Cap"
      />
      <CryptoTableHeader>
        <CryptoId>#</CryptoId>
        <CryptoName>코인 이름</CryptoName>
        <CryptoItem>현재 금액</CryptoItem>
        <CryptoItem>익절 금액</CryptoItem>
        <CryptoItem>손절 금액</CryptoItem>
        <CryptoItem>제거</CryptoItem>
      </CryptoTableHeader>
      {cryptoValue &&
        cryptoValue.map((data, index) => {
          const {
            first_historical_data,
            id,
            is_acive,
            last_historical_data,
            name,
            rank,
            slug,
            symbol,
            buyCryptoValue,
          } = data;
          console.log(data);

          const cryptoPrice =
            coinIdListValue[index] !== undefined &&
            coinIdListValue[index] !== null &&
            coinIdListValue.find((args: { id: number }) => args.id === data.id)
              .price !== false &&
            coinIdListValue.find((args: { id: number }) => args.id === data.id)
              .price;

          return (
            <CoinCard
              handleDeleteCoinList={handleDeleteCoinList}
              key={index}
              name={name}
              symbol={symbol}
              id={id}
              index={index + 1}
              buyCryptoValue={buyCryptoValue}
              handleCryptoInfo={handleCryptoInfo}
              cryptoPrice={cryptoPrice}
            />
          );
        })}

      <MoreSelectCard onPress={handlePressModal} />
      <Modal isOpen={isPress} handleDialog={handlePressModal}>
        <KeySelect options={coinTemp} crypto={crypto} setCrypto={setCrypto} />
        <PriceInput
          type="text"
          value={buyCryptoValue}
          onChange={(e) => onChangeRequest(e)}
          placeholder="진입점을 적어주세요."
        />
        <ApplyButton onClick={handleSelectCrypto}>선택하기</ApplyButton>
      </Modal>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div``;

const CryptoTableHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 12px;
  font-weight: bold;
`;

const CryptoId = styled.div`
  width: 100%;
  max-width: 26px;
`;

const CryptoName = styled.div`
  width: 100%;
  max-width: 221px;
`;

const CryptoItem = styled.div`
  width: 100%;
  max-width: 92px;
`;

const PriceInput = styled.input`
  padding: 10px 5px;
  border: none;
  box-shadow: 0 0 40px rgb(0 0 0 / 10%);
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

const ApplyButton = styled.button`
  box-shadow: 0 0 40px rgb(0 0 0 / 10%);
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  background-color: white;
  font-size: 14px;
`;
