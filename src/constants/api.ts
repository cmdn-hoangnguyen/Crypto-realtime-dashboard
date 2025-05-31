import type { CURRENCY } from './enum';
import type { FetchDataProps } from './type';

export const ENDPOINTS = {
  COINS: '/coins',
  COINS_MARKET: '/coins/markets?',
  SEARCH_GENERAL_COINS_INFO: '/search?query=',
  WEEK_DETAIL_INFO: 'sparkline=true&price_change_percentage=1h,24h,7d',
};

// GET ENDPOINT
export const endpointGetAllCoinMarket = ({ currency }: { currency: CURRENCY }) => {
  return `${ENDPOINTS.COINS_MARKET}${ENDPOINTS.WEEK_DETAIL_INFO}&vs_currency=${currency}`;
};

export const endpointGetCoinMarket = ({
  currency,
  order,
  totalItems,
  currentPage,
}: FetchDataProps) => {
  return `${ENDPOINTS.COINS_MARKET}${ENDPOINTS.WEEK_DETAIL_INFO}&vs_currency=${currency}&order=${order}&per_page=${totalItems}&page=${currentPage}`;
};

// SEARCH ENDPOINT
export const endpointSearchAllDetailCoinMarket = ({
  arrayIds,
  currency,
}: {
  arrayIds: string[];
  currency: CURRENCY;
}) => {
  return `${ENDPOINTS.COINS_MARKET}${ENDPOINTS.WEEK_DETAIL_INFO}&vs_currency=${currency}&ids=${arrayIds}`;
};

export const endpointSearchDetailCoinMarket = ({
  currency,
  order,
  totalItems,
  currentPage,
  arrayIds,
}: FetchDataProps) => {
  return `${ENDPOINTS.COINS_MARKET}${ENDPOINTS.WEEK_DETAIL_INFO}&vs_currency=${currency}&order=${order}&per_page=${totalItems}&page=${currentPage}&ids=${arrayIds}`;
};

export const endpointSearchAllGeneralCoinById = ({ input }: { input: string }) => {
  return `${ENDPOINTS.SEARCH_GENERAL_COINS_INFO}${input}`;
};
