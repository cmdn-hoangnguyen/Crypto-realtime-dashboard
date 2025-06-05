import type { CURRENCY, HEADER_LABEL, SORT_VALUE } from './enum';

export interface RawCoin {
  id: string;
  name: string;
  symbol: string;
  api_symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

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
  max_supply: number | null;
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
  sparkline_in_7d?: {
    price: number[];
  };
  price_change_percentage_1h_in_currency?: number;
  price_change_percentage_7d_in_currency?: number;
  last_updated?: string; // ISO Date
}

export interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
    data: {
      price: number;
      price_btc: string;
      price_change_percentage_24h: {
        [currencyCode: string]: number;
      };
      market_cap: string;
      market_cap_btc: string;
      total_volume: string;
      total_volume_btc: string;
      sparkline: string;
      content: {
        title: string;
        description: string;
      };
    };
  };
}

export interface TrendingCategory {
  id: number;
  name: string;
  slug: string;
  coins_count: string;
  market_cap_1h_change: number;
  data: {
    market_cap: number;
    market_cap_btc: number;
    total_volume: number;
    total_volume_btc: number;
    sparkline: string;
    market_cap_change_percentage_24h: {
      [currency: string]: number;
    };
  };
}

export interface TrendingResult {
  coins: TrendingCoin[];
  categories: TrendingCategory[];
}

export interface GlobalMarket {
  active_cryptocurrencies: number;
  upcoming_icos: number;
  ongoing_icos: number;
  ended_icos: number;
  markets: number;
  total_market_cap?: Record<string, number>;
  total_volume?: Record<string, number>;
  market_cap_percentage: Record<string, number>;
  market_cap_change_percentage_24h_usd: number;
  updated_at: number;
}

export interface GlobalMarketData {
  data: GlobalMarket;
}

export interface CoinResearchResult {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export interface CoinHistory {
  id: string;
  symbol: string;
  name: string;
  localization?: Record<string, string>;
  image?: {
    thumb: string;
    small: string;
  };
  market_cap_rank?: number;
  market_data?: {
    current_price?: Record<string, number>;
    market_cap?: Record<string, number>;
    total_volume?: Record<string, number>;
    price_change_percentage_1h_in_currency?: Record<string, number>;
    price_change_percentage_24h_in_currency?: Record<string, number>;
    price_change_percentage_7d_in_currency?: Record<string, number>;
    price_change_percentage_14d_in_currency?: Record<string, number>;
    price_change_percentage_30d_in_currency?: Record<string, number>;
    price_change_percentage_1y_in_currency?: Record<string, number>;
    price_change_percentage_24h?: number;
    price_change_percentage_7d?: number;
    price_change_percentage_14d?: number;
    price_change_percentage_30d?: number;
    price_change_percentage_1y?: number;
    total_supply?: number;
    circulating_supply?: number;
    fully_diluted_valuation?: Record<string, number>;
    high_24h?: Record<string, number>;
    low_24h?: Record<string, number>;
  };
  links: {
    homepage: string[];
  };
  community_data?: {
    facebook_likes?: number | null;
    twitter_followers?: number | null;
    reddit_average_posts_48h?: number | null;
    reddit_average_comments_48h?: number | null;
    reddit_subscribers?: number | null;
    reddit_accounts_active_48h?: number | null;
  };
  developer_data?: {
    forks?: number | null;
    stars?: number | null;
    subscribers?: number | null;
    total_issues?: number | null;
    closed_issues?: number | null;
    pull_requests_merged?: number | null;
    pull_request_contributors?: number | null;
    code_additions_deletions_4_weeks?: {
      additions?: number | null;
      deletions?: number | null;
    };
    commit_count_4_weeks?: number | null;
  };
  public_interest_stats?: {
    alexa_rank?: number | null;
    bing_matches?: number | null;
  };
  description?: Record<string, string>;
}

export type TimeSeriesData = [timestamp: number, value: number];

export interface CoinMarketHistory {
  prices: TimeSeriesData[];
  market_caps: TimeSeriesData[];
  total_volumes: TimeSeriesData[];
}

export interface FetchDataProps {
  currency: CURRENCY;
  totalItems: number;
  currentPage: number;
  order?: SORT_VALUE;
  id?: string;
  arrayIds?: string[];
}

export interface TableTemplate {
  id: number;
  headerLabel: HEADER_LABEL;
  classname: string;
  headerClass?: string;
  bodyClass?: string;
}

export interface RenderData<T = number | string> {
  label: string;
  value: T | undefined;
}
