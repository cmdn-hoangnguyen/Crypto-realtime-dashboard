import ValueDirection from '../../../../../components/ValueDirection';
import type { CURRENCY } from '../../../../../constants/enum';
import type { TrendingCoin } from '../../../../../constants/type';
import { getCurrency } from '../../../../../utils/common';

interface Props {
  data: TrendingCoin[] | [];
  currency: CURRENCY;
}

export const RenderTrending = ({ data, currency }: Props) => {
  return (
    <>
      {data?.map(trend => (
        <div className="flex justify-between items-end" key={trend?.item?.id}>
          <div className="flex items-end gap-2">
            <div className="max-w-6 max-h-6 rounded-full overflow-hidden">
              <img src={trend?.item?.small} alt={trend?.item?.name} />
            </div>

            <span>{trend?.item?.name}</span>
          </div>

          <div className="flex">
            <span>{getCurrency(currency)}</span>
            <span className="font-semibold">{trend?.item?.data?.price?.toFixed(4)}</span>
            <span className="w-20">
              {
                <ValueDirection
                  value={trend?.item?.data?.price_change_percentage_24h?.[currency] ?? 0}
                />
              }
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
