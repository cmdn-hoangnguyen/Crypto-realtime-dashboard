import { useState, type ChangeEventHandler } from 'react';

import Container from '../../../../components/Container';
import SearchInput from '../../../../components/SearchInput';
import { coinMarketTable, SORT_OPTIONS } from '../../../../constants/data';
import { BUTTON_VARIANT, CURRENCY, SORT_VALUE } from '../../../../constants/enum';
import useDebounce from '../../../../hooks/useDebounce';
import { Button } from '../../../../components/Button';
import { CustomSelect } from '../../../../components/Select';
import Pagination from '../../../../components/Pagination';
import useCoinMarketController from '../../../../hooks/useCoinMarketController';
import { Table } from '../../../../components/Table';
import { TableTitle } from '../../../../components/TableTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [currency, setCurrency] = useState(CURRENCY.USD);
  const [sort] = useState(SORT_VALUE.MARKET_CAP_DESC);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [isCurrencySelectOpen, setIsCurrencySelectOpen] = useState(false);

  const debouncedInput = useDebounce({ value: inputValue });

  const { displayedCoin, displayedCoinLength, coinsLoading, searchCoinLoading } =
    useCoinMarketController({
      debouncedInput: debouncedInput,
      currency: currency,
      currentPage: currentPage,
      itemsPerPage: itemsPerPage,
      order: sort,
    });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    setInputValue(event.target.value);
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const currencyOptions = Object.values(CURRENCY).map(currency => ({
    label: currency,
    value: currency,
  }));

  if (coinsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main-home">
      <Container>
        <div className="flex flex-col gap-1">
          <TableTitle
            label={
              <span className="flex gap-2">
                Crypto by {SORT_OPTIONS[sort]}
                <i className="">
                  <FontAwesomeIcon icon={faTableList} />
                </i>
              </span>
            }
          />

          <div className="table-actions flex gap-2">
            <SearchInput
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search coin..."
              isLoading={searchCoinLoading}
            />

            <Button
              variant={BUTTON_VARIANT.SUCCESS}
              label={
                <CustomSelect
                  value={currency}
                  onChange={setCurrency}
                  options={currencyOptions}
                  isOpen={isCurrencySelectOpen}
                  setIsOpen={setIsCurrencySelectOpen}
                />
              }
              onClick={() => setIsCurrencySelectOpen(true)}
            />
          </div>

          <Table
            classname="mb-6"
            data={displayedCoin}
            template={coinMarketTable}
            currency={currency}
          />

          <Pagination
            dataLength={displayedCoinLength ?? 0}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPaginationClick={(page: number) => {
              handlePagination(page);
            }}
          />
        </div>
      </Container>
    </main>
  );
};

export default Home;
