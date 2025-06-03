import type { CURRENCY } from '../../../../constants/enum';
import type { TrendingCategory, TrendingCoin } from '../../../../constants/type';
import useGetTrendingCoin from '../../../../hooks/useGetTrendingCoin';
import { formatHugeNumber } from '../../../../utils/common';

type TrendingData<T> = {
  title: string;
  data: T[];
  getIcon?: (item: T) => string;
  getName: (item: T) => string;
  getValue: (item: T) => string;
  getChange: (item: T) => number;
};

export const useRenderTrending = ({
  currency,
}: {
  currency: CURRENCY;
}): [TrendingData<TrendingCoin>, TrendingData<TrendingCategory>] => {
  const { trendingCoin, trendingCategory } = useGetTrendingCoin();

  const mostTrendingCoin = trendingCoin?.slice(0, 3) ?? [];
  const mostTrendingCategory = trendingCategory?.slice(0, 3) ?? [];

  return [
    {
      title: '🔥 Top Trending Coins',
      data: mostTrendingCoin,
      getIcon: item => item.item.small,
      getName: item => item.item.name,
      getValue: item => `$${item.item.data.price.toFixed(4)}`,
      getChange: item => item.item.data.price_change_percentage_24h?.[currency] ?? 0,
    },
    {
      title: '📈 Categories - Impressive Market cap',
      data: mostTrendingCategory,
      getName: item => item.name,
      getValue: item => `$${formatHugeNumber(item.data.market_cap)}`,
      getChange: item => item.data.market_cap_change_percentage_24h?.[currency] ?? 0,
    },
  ];
};
