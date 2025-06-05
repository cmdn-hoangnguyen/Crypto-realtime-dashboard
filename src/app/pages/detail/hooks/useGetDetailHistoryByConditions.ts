import { TIME } from '../../../../constants/enum';
import type { CoinHistory } from '../../../../constants/type';
import { getColorByValue } from '../../../../utils/common';

interface Props {
  detailHistory: CoinHistory | undefined;
  days: TIME;
}

export const getDetailHistoryByCondition = ({ detailHistory, days }: Props) => {
  const data = detailHistory?.market_data;

  const changeMap: Record<TIME, number | undefined> = {
    [TIME.ONE_DAY]: data?.price_change_percentage_24h,
    [TIME.SEVEN_DAY]: data?.price_change_percentage_7d,
    [TIME.ONE_MONTH]: data?.price_change_percentage_30d,
    [TIME.ONE_YEAR]: data?.price_change_percentage_1y,
  };

  const priceChange = changeMap[days] ?? data?.price_change_percentage_7d ?? 0;
  const color = getColorByValue(priceChange ?? 0);

  return { priceChange, color };
};
