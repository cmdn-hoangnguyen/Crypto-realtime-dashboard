import { useState } from 'react';
import Container from '../../../../components/Container';
import { CURRENCY, HEADER_LABEL, LOCAL_STORAGE_KEY, SORT_VALUE } from '../../../../constants/enum';
import Pagination from '../../../../components/Pagination';
import { getLocalStorage } from '../../../../utils/localStorage';
import type { CoinMarket } from '../../../../constants/type';
import { favoriteCoin, HEADER_SORT_MAPPING, SORT_OPTIONS } from '../../../../constants/data';
import { TableTitle } from '../../../../components/TableTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Table } from '../../../../components/Table';

const Favorite = () => {
  const [currency] = useState(CURRENCY.USD);
  const [sort, setSort] = useState(SORT_VALUE.MARKET_CAP_DESC);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const displayFavorite = (getLocalStorage(LOCAL_STORAGE_KEY.FAVORITE) as CoinMarket[]) ?? [];

  const handleOnSortChange = (label: HEADER_LABEL) => {
    const sortMap = HEADER_SORT_MAPPING?.[label];
    if (!sortMap) return;

    setCurrentPage(1);
    setSort(prev => (prev === sortMap.desc ? sortMap.asc : sortMap.desc));
  };

  return (
    <main className="favorite-main pt-20">
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
          data={displayFavorite}
          template={favoriteCoin}
          currency={currency}
          onSortChange={(label: HEADER_LABEL) => handleOnSortChange(label)}
          currentSort={sort}
        />

        <Pagination
          classname="mt-6"
          dataLength={displayFavorite?.length ?? 0}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPaginationClick={(page: number) => {
            handlePagination(page);
          }}
        />
      </Container>
    </main>
  );
};

export default Favorite;
