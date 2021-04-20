import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const selectCrypto = atom({
	key: "Crypto",
	default: [] as any,
	effects_UNSTABLE: [persistAtom],
});
