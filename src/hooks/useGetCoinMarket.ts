import useSWR from 'swr';

import { ENDPOINTS } from '../constants/api';
import type { CoinMarket } from '../constants/type';
import { fetcher } from '../libs/axios';

interface Props {
  currency: string;
  totalItems: number;
  currentPage: number;
  order?: string;
}

const useGetCoinMarket = ({
  currency,
  order = 'market_cap_desc',
  totalItems,
  currentPage,
}: Props) => {
  const { data, isLoading } = useSWR<CoinMarket[]>(
    `${ENDPOINTS.COINS_MARKET}?vs_currency=${currency}&order=${order}&per_page=${totalItems}&page=${currentPage}&sparkline=true&price_change_percentage=1h,24h,7d`,
    fetcher,
    {
      dedupingInterval: 60000,
      revalidateOnFocus: false,
    }
  );

  return { coins: data, coinsLoading: isLoading };
};

export default useGetCoinMarket;
