import { useState } from 'react';
import Container from '../../../../components/Container';
import { CURRENCY, LOCAL_STORAGE_KEY, SORT_VALUE } from '../../../../constants/enum';
import { Table } from '../../../../components/Table';
import Pagination from '../../../../components/Pagination';
import { getLocalStorage } from '../../../../utils/localStorage';
import type { CoinMarket } from '../../../../constants/type';
import { favoriteCoin, SORT_OPTIONS } from '../../../../constants/data';
import { TableTitle } from '../../../../components/TableTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Favorite = () => {
  const [currency] = useState(CURRENCY.USD);
  const [sort] = useState(SORT_VALUE.MARKET_CAP_DESC);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const displayFavorite = (getLocalStorage(LOCAL_STORAGE_KEY.FAVORITE) as CoinMarket[]) ?? [];

  return (
    <main>
      <Container>
        <TableTitle
          classname="mb-8"
          label={
            <span className="flex gap-2">
              My favorite by {SORT_OPTIONS[sort]}
              <i className="text-[var(--color-secondary)]">
                <FontAwesomeIcon icon={faBookmark} />
              </i>
            </span>
          }
        />

        <Table
          classname="mb-6"
          data={displayFavorite}
          template={favoriteCoin}
          currency={currency}
        />

        <Pagination
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
