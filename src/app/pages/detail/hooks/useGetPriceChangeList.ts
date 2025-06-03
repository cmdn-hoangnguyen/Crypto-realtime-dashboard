import type { CURRENCY } from '../../../../constants/enum';
import type { CoinHistory } from '../../../../constants/type';

export const useGetPriceChangeList = ({
  data,
  currency,
}: {
  data: CoinHistory;
  currency: CURRENCY;
}) => {
  return [
    {
      label: '1H',
      value: data?.market_data?.price_change_percentage_1h_in_currency?.[currency],
    },
    {
      label: '24H',
      value: data?.market_data?.price_change_percentage_24h_in_currency?.[currency],
    },
    {
      label: '7D',
      value: data?.market_data?.price_change_percentage_7d_in_currency?.[currency],
    },
    {
      label: '14D',
      value: data?.market_data?.price_change_percentage_14d_in_currency?.[currency],
    },
    {
      label: '30D',
      value: data?.market_data?.price_change_percentage_30d_in_currency?.[currency],
    },
    {
      label: '1Y',
      value: data?.market_data?.price_change_percentage_1y_in_currency?.[currency],
    },
  ];
};
