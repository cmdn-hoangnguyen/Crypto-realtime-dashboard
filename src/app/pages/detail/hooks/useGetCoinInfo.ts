import type { CURRENCY } from '../../../../constants/enum';
import type { CoinHistory } from '../../../../constants/type';
import { getCurrency } from '../../../../utils/common';

export const useGetCoinInfo = ({
  detailHistory,
  currency,
}: {
  detailHistory: CoinHistory;
  currency: CURRENCY;
}) => {
  return [
    {
      label: 'Website',
      value: detailHistory?.links?.homepage[0],
    },
    {
      label: '24H Range',
      value: `${getCurrency(currency)}${detailHistory?.market_data?.low_24h?.[currency]} - ${getCurrency(currency)}${detailHistory?.market_data?.high_24h?.[currency]}`,
    },
  ];
};
