import useSWR from 'swr';
import { endpointGetTrend } from '../constants/api';
import { fetcher } from '../libs/fetcher';
import type { TrendingResult } from '../constants/type';

const useGetTrendingCoin = () => {
  const { data, isLoading } = useSWR<TrendingResult>(endpointGetTrend(), fetcher, {
    dedupingInterval: 30000,
    revalidateOnFocus: false,
  });

  return {
    trendingCoin: data?.coins,
    trendingCategory: data?.categories,
    isLoadingTrending: isLoading,
  };
};

export default useGetTrendingCoin;
