import useSWR from 'swr';

import { endpointGetCoinMarket } from '../constants/api';
import type { CoinMarket, FetchDataProps } from '../constants/type';
import { fetcher } from '../libs/axios';
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
      dedupingInterval: 60000,
      revalidateOnFocus: false,
    }
  );

  return { coins: data, coinsLoading: isLoading };
};

export default useGetCoinMarket;
