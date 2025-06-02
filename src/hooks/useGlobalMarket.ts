import useSWR from 'swr';
import type { GlobalMarketData } from '../constants/type';
import { endpointGetGlobalMarket } from '../constants/api';
import { fetcher } from '../libs/axios';

export const useGlobalMarket = () => {
  const { data, isLoading } = useSWR<GlobalMarketData>(endpointGetGlobalMarket(), fetcher, {
    dedupingInterval: 60000,
    revalidateOnFocus: false,
  });

  return {
    globalMarket: data?.data,
    isGlobalMarketLoading: isLoading,
  };
};
