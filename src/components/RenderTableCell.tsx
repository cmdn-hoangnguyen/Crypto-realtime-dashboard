import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LineChart from './LineChart';
import ValueDirection from './ValueDirection';
import type { CURRENCY } from '../constants/enum';
import type { CoinMarket } from '../constants/type';
import { formatValue, getCurrency } from '../utils/common';

interface Props {
  colIndex: number;
  currency: CURRENCY;
  data: CoinMarket;
}

const RenderTableCell = ({ colIndex, data, currency }: Props) => {
  const renderCellContent = () => {
    switch (colIndex) {
      case 0:
        return (
          <div className="table-body-item-cell">
            <button>
              <FontAwesomeIcon icon={farHeart} />
            </button>
          </div>
        );

      case 1:
        return (
          <div className="table-body-item-cell grid grid-cols-6 items-center">
            <div className="min-h-8 col-span-1">
              <img className="w-full h-full" src={data?.image} alt={data?.name} />
            </div>

            <div className="flex flex-col col-span-5 ml-2">
              <span className="truncate">{data?.name}</span>
              <span className="uppercase">{data?.symbol}</span>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="table-body-item-cell">
            <span>{getCurrency(currency)}</span>
            <span>{formatValue(data.current_price)}</span>
          </div>
        );

      case 3:
        return (
          <div className="table-body-item-cell">
            <ValueDirection value={data?.price_change_percentage_1h_in_currency} />
          </div>
        );

      case 4:
        return (
          <div className="table-body-item-cell">
            <ValueDirection value={data?.price_change_percentage_24h} />
          </div>
        );

      case 5:
        return (
          <div className="table-body-item-cell">
            <ValueDirection value={data?.price_change_percentage_7d_in_currency} />
          </div>
        );

      case 6:
        return (
          <div className="table-body-item-cell">
            <span>{getCurrency(currency)}</span>
            <span>{formatValue(data?.total_volume)}</span>
          </div>
        );

      case 7:
        return (
          <div className="table-body-item-cell">
            <span>{getCurrency(currency)}</span>
            <span>{formatValue(data?.market_cap)}</span>
          </div>
        );

      case 8:
        return (
          <div className="table-body-item-cell flex justify-end">
            {data?.sparkline_in_7d?.price?.length ? (
              <LineChart
                prices={data?.sparkline_in_7d?.price ?? []}
                weekChangeData={data?.price_change_percentage_7d_in_currency}
              />
            ) : (
              'Loading chart..'
            )}
          </div>
        );
    }
  };

  return renderCellContent();
};

export default RenderTableCell;
