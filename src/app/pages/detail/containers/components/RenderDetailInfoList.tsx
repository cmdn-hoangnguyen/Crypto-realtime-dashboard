import { DetailInfoList } from './DetailInfoList';
import { CURRENCY, DETAIL_INFO } from '../../../../../constants/enum';
import type { RenderData } from '../../../../../constants/type';

interface Props {
  marketInfo?: RenderData<number>[];
  coinInfo?: RenderData<string>[];
  currency: CURRENCY;
}

export const renderDetailInfoList = ({ marketInfo, coinInfo, currency }: Props) => {
  return [
    {
      data: (() => (
        <>
          {marketInfo && (
            <DetailInfoList<number>
              title="Market info"
              data={marketInfo}
              currency={currency}
              detailInfo={DETAIL_INFO.MARKET}
            />
          )}
        </>
      ))(),
    },
    {
      data: (() => (
        <>
          {coinInfo && (
            <DetailInfoList<string>
              title="Coin info"
              data={coinInfo}
              currency={currency}
              detailInfo={DETAIL_INFO.COIN}
            />
          )}
        </>
      ))(),
    },
  ];
};
