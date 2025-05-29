import { useEffect, useState } from 'react';

import { ENDPOINTS } from '../constants/api';
import type { CoinMarket } from '../constants/type';
import axiosInstance from '../libs/axios';

interface Props {
  currency?: string;
  order?: string;
  totalItems: number;
  currentPage: number;
}

const useGetCoinMarket = ({
  currency = 'usd',
  order = 'market_cap_desc',
  totalItems,
  currentPage,
}: Props) => {
  const [coins, setCoins] = useState<CoinMarket[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosInstance.get(ENDPOINTS.COINS_MARKET, {
          params: {
            vs_currency: currency,
            order: order,
            per_page: totalItems,
            page: currentPage,
          },
        });

        setCoins(response?.data);
      } catch (error) {
        console.error(error);
        throw new Error('Fail to get coins market:');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [currency, currentPage, order, totalItems]);

  return { coins, loading };
};

export default useGetCoinMarket;
