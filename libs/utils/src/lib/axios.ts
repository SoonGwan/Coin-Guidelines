import axios, { AxiosResponse } from "axios";
import { SERVER } from "../config/SERVER.json";
import { IGetRequest } from "@coin-line/api-interfaces";

const COIN_MACAP_AXIOS = axios.create({
  baseURL: `${SERVER}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getRequest = async ({
  url,
}: IGetRequest): Promise<AxiosResponse> => {
  const data: AxiosResponse = await COIN_MACAP_AXIOS.get(url);
  return data;
};
