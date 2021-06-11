import { atom, selectorFamily } from "recoil";
import { recoilPersist } from "recoil-persist";
import { requestCoin } from "../slices/coin";
import { requestCoinInfo } from "../slices/coinInfo";

const { persistAtom } = recoilPersist();

export const selectCrypto = atom({
  key: "Crypto",
  default: [] as any,
  effects_UNSTABLE: [persistAtom],
});

export const coinIdList = atom({
  key: "ID",
  default: [] as any,
});

export const coinDataListSelector = selectorFamily({
  key: "coinDataListSelector",
  get: () => async () => {
    const data = await requestCoin();

    return data;
  },
});

export const coinPrice = atom({
  key: "coinPrice",
  default: [],
});

export const coinInfoDataSelector = selectorFamily({
  key: "coinInfoDataSelector",
  get: (id: number) => async () => {
    const data = await requestCoinInfo(id);

    return data;
  },
});
