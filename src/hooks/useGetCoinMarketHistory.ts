import useSWR from 'swr';

import { endpointGetCoinHistory, endpointGetSingleCoinHistory } from '../constants/api';
import { CURRENCY } from '../constants/enum';
import type { CoinHistory, CoinMarketHistory } from '../constants/type';
import { fetcher } from '../libs/fetcher';

interface Props {
  coinId: string;
  currency?: CURRENCY;
  days?: number;
}

const useGetCoinMarketHistory = ({ coinId, currency = CURRENCY.USD, days = 7 }: Props) => {
  const { data, isLoading } = useSWR<CoinMarketHistory>(
    endpointGetCoinHistory({
      coinId: coinId,
      currency: currency,
      days: days,
    }),
    fetcher,
    {
      dedupingInterval: 30000,
      revalidateOnFocus: false,
    }
  );

  const formattedPrices = data?.prices.map((price: [number, number]) => ({
    timestamp: price[0],
    time: new Date(price[0]).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
    price: price[1],
  }));

  const { data: detailCoinHistory } = useSWR<CoinHistory>(
    endpointGetSingleCoinHistory({ coinId: coinId, currency: currency }),
    fetcher,
    {
      dedupingInterval: 30000,
      revalidateOnFocus: false,
    }
  );

  return {
    detailHistory: detailCoinHistory,
    priceHistory: formattedPrices,
    coinMarketHistoryLoading: isLoading,
  };
};

export default useGetCoinMarketHistory;
