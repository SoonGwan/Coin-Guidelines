import { getRequest } from "@coin-line/utils";

export const requestCoin = async () => {
  const url = "/coin/coin";
  const {
    data: { data: coinData },
  } = await getRequest({ url });

  return coinData;
};

export const requestCoinIdList = async (idList: number[]) => {
  const cryptoIdList = idList.join(",");
  const url = `/coin/coinIdList?id=${cryptoIdList}`;

  const { data } = await getRequest({ url });

  return data;
};
