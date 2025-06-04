import useSWR from 'swr';

import { endpointGetAllCoinMarketLimitInfo, endpointGetCoinMarket } from '../constants/api';
import type { CoinMarket, FetchDataProps } from '../constants/type';
import { fetcher } from '../libs/fetcher';
import { SORT_VALUE } from '../constants/enum';

const useGetCoinMarket = ({
  currency,
  order = SORT_VALUE.MARKET_CAP_DESC,
  totalItems,
  currentPage,
}: FetchDataProps) => {
  const { data, isLoading } = useSWR<CoinMarket[]>(
    endpointGetCoinMarket({ currency, order, totalItems, currentPage }),
    fetcher,
    {
      dedupingInterval: 30000,
      revalidateOnFocus: false,
      // refreshInterval: 5000,
    }
  );

  const { data: allInfoData } = useSWR<CoinMarket[]>(endpointGetAllCoinMarketLimitInfo(), fetcher, {
    dedupingInterval: 30000,
    revalidateOnFocus: false,
  });

  return { coins: data, coinsLoading: isLoading, coinsLength: allInfoData?.length };
};

export default useGetCoinMarket;
