import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LineChart from './LineChart';
import ValueDirection from './ValueDirection';
import { HEADER_LABEL, LOCAL_STORAGE_KEY, PATHNAME, type CURRENCY } from '../constants/enum';
import type { CoinMarket } from '../constants/type';
import { formatValue, getCurrency } from '../utils/common';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { useEffect, useState } from 'react';
import { FlashColor } from './FlashColor';

interface Props {
  headerLabel: HEADER_LABEL;
  currency: CURRENCY;
  data: CoinMarket;
}

const RenderTableCell = ({ headerLabel, data, currency }: Props) => {
  const [localData, setLocalData] = useState<CoinMarket[]>([]);

  useEffect(() => {
    const favoriteData: CoinMarket[] = getLocalStorage(LOCAL_STORAGE_KEY.FAVORITE) ?? [];
    setLocalData(favoriteData);
  }, []);

  const isFavorite = localData?.find(coin => coin.id === data.id);

  const updateFavoriteList = (newList: CoinMarket[]) => {
    setLocalStorage(LOCAL_STORAGE_KEY.FAVORITE, newList);
    setLocalData(newList);
  };

  const toggleFavorite = () => {
    const currentFavorites: CoinMarket[] = getLocalStorage(LOCAL_STORAGE_KEY.FAVORITE) ?? [];

    const updatedFavorites = isFavorite
      ? currentFavorites.filter(coin => coin.id !== data.id)
      : [...currentFavorites, data];

    updateFavoriteList(updatedFavorites);
  };

  const renderCellContent = () => {
    switch (headerLabel) {
      case HEADER_LABEL.FAV:
        return (
          <div className="table-body-item-cell">
            <button onClick={toggleFavorite}>
              {isFavorite ? (
                <i className="text-[var(--color-heart)]">
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              ) : (
                <i className="hover:text-[var(--color-heart)] duration-150">
                  <FontAwesomeIcon icon={isFavorite ? faHeart : farHeart} />
                </i>
              )}
            </button>
          </div>
        );

      case HEADER_LABEL.ACTION:
        return (
          <div className="table-body-item-cell">
            <button
              className="group px-2 py-1 rounded-md duration-150 bg-transparent hover:bg-[var(--color-error)]"
              onClick={toggleFavorite}
            >
              <i className="text-[var(--color-error)] group-hover:text-white">
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </button>
          </div>
        );

      case HEADER_LABEL.COIN:
        return (
          <a className="table-body-item-cell" href={`/${PATHNAME.DETAIL}/${data?.id}`}>
            <div className="flex items-center">
              <div className="h-12 min-w-12">
                <img className="w-full h-full" src={data?.image} alt={data?.name} />
              </div>

              <div className="flex flex-col ml-2">
                <span className="truncate max-w-20">{data?.name}</span>
                <span className="uppercase text-[var(--color-muted)]">{data?.symbol}</span>
              </div>
            </div>
          </a>
        );

      case HEADER_LABEL.PRICE:
        return (
          <div className="table-body-item-cell">
            <FlashColor price={data?.current_price} currency={currency} />
          </div>
        );

      case HEADER_LABEL.ONE_HOUR:
        return (
          <div className="table-body-item-cell">
            <ValueDirection value={data?.price_change_percentage_1h_in_currency ?? 0} />
          </div>
        );

      case HEADER_LABEL.TWENTY_FOUR_HOURS:
        return (
          <div className="table-body-item-cell">
            <ValueDirection value={data?.price_change_percentage_24h} />
          </div>
        );

      case HEADER_LABEL.SEVEN_DAYS:
        return (
          <div className="table-body-item-cell">
            <ValueDirection value={data?.price_change_percentage_7d_in_currency ?? 0} />
          </div>
        );

      case HEADER_LABEL.VOLUME_24H:
        return (
          <div className="table-body-item-cell">
            <span>{getCurrency(currency)}</span>
            <span>{formatValue(data?.total_volume)}</span>
          </div>
        );

      case HEADER_LABEL.MARKET_CAP:
        return (
          <div className="table-body-item-cell">
            <span>{getCurrency(currency)}</span>
            <span>{formatValue(data?.market_cap)}</span>
          </div>
        );

      case HEADER_LABEL.LAST_7_DAYS:
        return (
          <div className="table-body-item-cell flex justify-end">
            {data?.sparkline_in_7d?.price?.length ? (
              <LineChart
                prices={data?.sparkline_in_7d?.price ?? []}
                weekChangeData={data?.price_change_percentage_7d_in_currency ?? 0}
                width={150}
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
