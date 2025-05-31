import useSWR from 'swr';

import { ENDPOINTS } from '../constants/api';
import { fetcher } from '../libs/axios';

interface Props {
  coinId: string;
  currency?: string;
  days?: number;
}

const useGetCoinMarketHistory = ({ coinId, currency = 'usd', days = 7 }: Props) => {
  const { data, isLoading } = useSWR(
    `${ENDPOINTS.COINS}/${coinId}/market_chart?vs_currency=${currency}&days=${days}`,
    fetcher,
    {
      dedupingInterval: 60000,
      revalidateOnFocus: false,
    }
  );

  return { history: data, coinMarketHistoryLoading: isLoading };
};

export default useGetCoinMarketHistory;
