import { useEffect, useState } from 'react';

import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from '../../../../components/Container';
import { Table } from '../../../../components/Table';
import { TableTitle } from '../../../../components/TableTitle';
import { favoriteCoin, HEADER_SORT_MAPPING, SORT_OPTIONS } from '../../../../constants/data';
import { CURRENCY, HEADER_LABEL, LOCAL_STORAGE_KEY, SORT_VALUE } from '../../../../constants/enum';
import type { CoinMarket } from '../../../../constants/type';
import { getLocalStorage } from '../../../../utils/localStorage';

const Favorite = () => {
  const [currency] = useState(CURRENCY.USD);
  const [sort, setSort] = useState(SORT_VALUE.MARKET_CAP_DESC);
  const [favoriteList, setFavoriteList] = useState<CoinMarket[]>([]);

  const updateFavoriteFromStorage = () => {
    const data = getLocalStorage<CoinMarket[]>(LOCAL_STORAGE_KEY.FAVORITE) ?? [];
    setFavoriteList(data);
  };

  const handleOnSortChange = (label: HEADER_LABEL) => {
    const sortMap = HEADER_SORT_MAPPING?.[label];
    if (!sortMap) return;

    setSort(prev => (prev === sortMap.desc ? sortMap.asc : sortMap.desc));
  };

  useEffect(() => {
    updateFavoriteFromStorage();

    window.scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="favorite-main pt-20 min-h-[50vh]">
      <Container>
        <TableTitle
          classname="mb-8"
          label={
            <span className="flex gap-2 text-[var(--text-primary)]">
              My favorite by {SORT_OPTIONS[sort]}
              <i className="text-[var(--text-secondary)]">
                <FontAwesomeIcon icon={faBookmark} />
              </i>
            </span>
          }
        />

        <Table
          data={favoriteList}
          template={favoriteCoin}
          currency={currency}
          onSortChange={(label: HEADER_LABEL) => handleOnSortChange(label)}
          currentSort={sort}
          onFavoriteUpdated={updateFavoriteFromStorage}
        />
      </Container>
    </main>
  );
};

export default Favorite;
