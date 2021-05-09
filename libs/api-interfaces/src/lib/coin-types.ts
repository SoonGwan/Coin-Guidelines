export type quoteUSDType = {
  last_updated?: string;
  market_cap?: number;
  percent_change_1h?: number;
  percent_change_7d?: number;
  percent_change_24h?: number;
  percent_change_30d?: number;
  percent_change_60d?: number;
  percent_change_90d?: number;
  price?: number;
  volume_24h?: number;
};

export type coinData = {
  circulating_supply?: number;
  cmc_rank?: number;
  date_added?: string;
  id?: number;
  is_active?: number;
  is_fiat?: number;
  last_updated?: string;
  max_supply?: number;
  name?: string;
  num_market_pairs?: number;
  platform?: null | string;
  quote?: USDElement;
  slug?: string;
  symbol?: string;
  tags?: string[];
  total_supply?: number;
};

export type USDElement = {
  USD: quoteUSDType;
};
