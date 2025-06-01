import useSWR from 'swr';

import { endpointGetCoinHistory } from '../constants/api';
import { fetcher } from '../libs/axios';
import { CURRENCY } from '../constants/enum';
import type { CoinMarketHistory } from '../constants/type';

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
      dedupingInterval: 60000,
      revalidateOnFocus: false,
    }
  );

  const formattedPrices = data?.prices.map((price: [number, number]) => ({
    timestamp: price[0],
    time: new Date(price[0]).toLocaleDateString(),
    price: price[1],
  }));

  return { priceHistory: formattedPrices, coinMarketHistoryLoading: isLoading };
};

export default useGetCoinMarketHistory;
