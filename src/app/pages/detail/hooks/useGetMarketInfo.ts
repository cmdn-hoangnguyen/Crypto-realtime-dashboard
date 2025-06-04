import type { CURRENCY } from '../../../../constants/enum';
import type { CoinHistory } from '../../../../constants/type';

export const useGetDetailMarketInfo = ({
  detailHistory,
  currency,
}: {
  detailHistory: CoinHistory;
  currency: CURRENCY;
}) => {
  if (!detailHistory) return [];

  return [
    {
      label: 'Market cap',
      value: detailHistory?.market_data?.market_cap?.[currency],
    },
    {
      label: 'Fully Diluted Valuation',
      value: detailHistory?.market_data?.fully_diluted_valuation?.[currency],
    },
    {
      label: 'Total volume',
      value: detailHistory?.market_data?.total_volume?.[currency],
    },
    {
      label: 'Total supply',
      value: detailHistory?.market_data?.total_supply,
    },
    {
      label: 'Circulating supply',
      value: detailHistory?.market_data?.circulating_supply,
    },
  ];
};
