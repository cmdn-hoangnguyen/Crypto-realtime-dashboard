export interface CoinMarket {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number; // All Time High
  ath_change_percentage: number;
  ath_date: string; // ISO Date
  atl: number; // All Time Low
  atl_change_percentage: number;
  atl_date: string; // ISO Date
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  sparkline_in_7d: {
    price: number[];
  };
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  last_updated: string; // ISO Date
}

export type TimeSeriesData = [timestamp: number, value: number];

export interface CoinMarketHistory {
  prices: TimeSeriesData[];
  market_caps: TimeSeriesData[];
  total_volumes: TimeSeriesData[];
}
