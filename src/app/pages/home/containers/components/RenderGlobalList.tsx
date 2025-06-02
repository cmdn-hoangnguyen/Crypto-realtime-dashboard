import { Badge } from '../../../../../components/Badge';
import RoundedItem from '../../../../../components/RoundedItem';
import { BADGE_VARIANT, type CURRENCY } from '../../../../../constants/enum';
import { useGlobalMarket } from '../../../../../hooks/useGlobalMarket';
import { formatHugeNumber, getCurrency } from '../../../../../utils/common';

interface Props {
  currency: CURRENCY;
}

export const RenderGlobalList = ({ currency }: Props) => {
  const { globalMarket, isGlobalMarketLoading } = useGlobalMarket();

  return (
    <Badge
      variant={BADGE_VARIANT.ERROR}
      content={
        <>
          <RoundedItem classname="bg-red-500 w-10 h-10 mb-4" content={<>$</>} />

          <strong className="font-bold text-xl">
            {getCurrency(currency)}
            {formatHugeNumber(globalMarket?.total_market_cap?.[currency] ?? 0)}
          </strong>

          <span>Total Market Cap</span>
        </>
      }
    ></Badge>
  );
};
