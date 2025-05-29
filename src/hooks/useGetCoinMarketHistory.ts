import { useEffect, useState } from 'react';

import { ENDPOINTS } from '../constants/api';
import type { CoinMarketHistory } from '../constants/type';
import axiosInstance from '../libs/axios';

interface Props {
  coinId: string;
  currency?: string;
  days?: number;
}

const useGetCoinMarketHistory = ({ coinId, currency = 'usd', days = 7 }: Props) => {
  const [history, setHistory] = useState<CoinMarketHistory[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosInstance.get(`${ENDPOINTS.COINS}/${coinId}/market_chart`, {
          params: {
            vs_currency: currency,
            days: days,
          },
        });

        setHistory(response?.data);
      } catch (error) {
        console.error(error);
        throw new Error('Failed to get coin price history');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [coinId, currency, days]);

  return { history, loading };
};

export default useGetCoinMarketHistory;
