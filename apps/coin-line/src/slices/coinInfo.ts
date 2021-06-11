import { getRequest } from "@coin-line/utils";

export const requestCoinInfo = async (id: number) => {
  const url = `/coin/coinInfo?id=${id}`;
  const {
    data: { data },
  } = await getRequest({ url });

  return data;
};
