import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

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

export const coinPrice = atom({
  key: "coinPrice",
  default: [],
});
