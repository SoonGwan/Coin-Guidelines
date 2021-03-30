import axios from 'axios';
import { SERVER_COIN_MACAP } from '../config/SERVER.json';
import { TOKEN_COIN_MACAP } from '../config/TOKEN.json';

export const COIN_MACAP_AXIOS = axios.create({
  baseURL: `${SERVER_COIN_MACAP}`,
  headers: {
    'X-CMC_PRO_API_KEY': `${TOKEN_COIN_MACAP}`,
  },
});
