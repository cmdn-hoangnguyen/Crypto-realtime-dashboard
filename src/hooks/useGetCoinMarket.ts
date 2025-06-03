import useSWR from 'swr';

import { endpointGetAllCoinMarketLimitInfo, endpointGetCoinMarket } from '../constants/api';
import type { CoinMarket, FetchDataProps } from '../constants/type';
import { fetcher } from '../libs/axios';
import { SORT_VALUE } from '../constants/enum';

const useGetCoinMarket = ({
  currency,
  order = SORT_VALUE.MARKET_CAP_DESC,
  totalItems,
  currentPage,
}: FetchDataProps) => {
  const { data, isLoading, mutate } = useSWR<CoinMarket[]>(
    endpointGetCoinMarket({ currency, order, totalItems, currentPage }),
    fetcher,
    {
      dedupingInterval: 60000,
      revalidateOnFocus: false,
    }
  );

  const { data: limitInfoData } = useSWR<CoinMarket[]>(
    endpointGetAllCoinMarketLimitInfo(),
    fetcher,
    {
      dedupingInterval: 60000,
      revalidateOnFocus: false,
    }
  );

  const refetch = () => mutate();

  return { coins: data, coinsLoading: isLoading, coinsLength: limitInfoData?.length, refetch };
};

export default useGetCoinMarket;
