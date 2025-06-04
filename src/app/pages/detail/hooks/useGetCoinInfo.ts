import type { CURRENCY } from '../../../../constants/enum';
import type { CoinHistory } from '../../../../constants/type';
import { formatValue, getCurrency } from '../../../../utils/common';

export const useGetCoinInfo = ({
  detailHistory,
  currency,
}: {
  detailHistory: CoinHistory;
  currency: CURRENCY;
}) => {
  if (!detailHistory) return [];

  const formatRange = (inputValue: number) => {
    return `${getCurrency(currency)}${formatValue(inputValue ?? 0)}`;
  };

  return [
    {
      label: 'Website',
      value: detailHistory?.links?.homepage[0],
    },
    {
      label: '24H Range',
      value: `${formatRange(detailHistory?.market_data?.low_24h?.[currency] ?? 0)} - ${formatRange(detailHistory?.market_data?.high_24h?.[currency] ?? 0)}`,
    },
  ];
};
