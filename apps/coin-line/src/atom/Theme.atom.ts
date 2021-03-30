import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const Theme = atom({
  key: 'Theme',
  default: false as boolean,
  effects_UNSTABLE: [persistAtom],
});
