import { useEffect, useState, type ChangeEventHandler } from 'react';

import Container from '../../../../components/Container';
import SearchInput from '../../../../components/SearchInput';
import {
  coinMarketTable,
  currencyOptions,
  HEADER_SORT_MAPPING,
  SORT_OPTIONS,
  totalItemOptions,
} from '../../../../constants/data';
import { CURRENCY, HEADER_LABEL, SORT_VALUE } from '../../../../constants/enum';
import useDebounce from '../../../../hooks/useDebounce';
import { Button } from '../../../../components/Button';
import { CustomSelect } from '../../../../components/Select';
import Pagination from '../../../../components/Pagination';
import { Table } from '../../../../components/Table';
import { TableTitle } from '../../../../components/TableTitle';
import { SpinLoader } from '../../../../components/SpinLoader';
import { useGlobalMarket } from '../../../../hooks/useGlobalMarket';
import { useRenderTrending } from '../hook/useRenderTrending';
import { Paper } from '../../../../components/Paper';
import useCoinMarketController from '../hook/useCoinMarketController';
import { InfoValueItem } from './components/InfoValueItem';
import type { TrendingCategory, TrendingCoin } from '../../../../constants/type';
import { RenderInfoValue } from './components/RenderInfoValue';
import { RenderGlobalList } from './components/RenderGlobalList';

const Home = () => {
  const [currency, setCurrency] = useState(CURRENCY.USD);
  const [sort, setSort] = useState<SORT_VALUE>(SORT_VALUE.MARKET_CAP_DESC);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [isCurrencySelectOpen, setIsCurrencySelectOpen] = useState(false);
  const [isTotalItemsSelectOpen, setIsTotalItemsSelectOpen] = useState(false);

  const debouncedInput = useDebounce({ value: inputValue });

  const { displayedCoin, displayedCoinLength, coinsLoading, searchCoinLoading } =
    useCoinMarketController({
      debouncedInput: debouncedInput,
      currency: currency,
      currentPage: currentPage,
      itemsPerPage: itemsPerPage,
      order: sort,
    });

  const [coinTrending, categoryTrending] = useRenderTrending({ currency });

  const { globalMarket, isGlobalMarketLoading } = useGlobalMarket();

  console.log(globalMarket);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    setInputValue(event.target.value);
  };

  const handleOnSortChange = (label: HEADER_LABEL) => {
    const sortMap = HEADER_SORT_MAPPING?.[label];
    if (!sortMap) return;

    setCurrentPage(1);
    setSort(prev => (prev === sortMap.desc ? sortMap.asc : sortMap.desc));
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (debouncedInput.length > 2) {
      setCurrentPage(1);
    }
  }, [debouncedInput]);

  return (
    <main className="main-home">
      <Container>
        <div className="flex flex-col">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-3">
              <RenderGlobalList currency={currency} />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-6">
              <RenderInfoValue
                title={coinTrending?.title}
                data={coinTrending?.data}
                renderItem={(item: TrendingCoin) => (
                  <InfoValueItem
                    data={item}
                    getIcon={coinTrending?.getIcon}
                    getName={coinTrending.getName}
                    getChange={coinTrending?.getChange}
                    getValue={coinTrending?.getValue}
                  />
                )}
              />
            </div>

            <div className="col-span-6">
              <RenderInfoValue
                title={categoryTrending?.title}
                data={categoryTrending?.data}
                renderItem={(item: TrendingCategory) => (
                  <InfoValueItem
                    data={item}
                    getName={categoryTrending.getName}
                    getChange={categoryTrending?.getChange}
                    getValue={categoryTrending?.getValue}
                  />
                )}
              />
            </div>
          </div>

          <Paper className="mb-6">
            <div className="flex justify-between items-center">
              <TableTitle
                label={<span className="flex gap-2">Crypto by {SORT_OPTIONS[sort]}</span>}
              />

              <div className="table-actions flex gap-2">
                <SearchInput
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Search coin..."
                  isLoading={searchCoinLoading}
                />

                <Button
                  label={
                    <CustomSelect<CURRENCY>
                      value={currency}
                      onChange={setCurrency}
                      options={currencyOptions}
                      isOpen={isCurrencySelectOpen}
                      setIsOpen={setIsCurrencySelectOpen}
                    />
                  }
                  onClick={() => setIsCurrencySelectOpen(!isCurrencySelectOpen)}
                />

                <Button
                  label={
                    <CustomSelect<number>
                      value={itemsPerPage}
                      onChange={setItemPerPage}
                      options={totalItemOptions}
                      isOpen={isTotalItemsSelectOpen}
                      setIsOpen={setIsTotalItemsSelectOpen}
                    />
                  }
                  onClick={() => setIsTotalItemsSelectOpen(!isTotalItemsSelectOpen)}
                />
              </div>
            </div>
          </Paper>

          <div className="border border-solid border-[var(--border-default)] rounded-2xl overflow-hidden">
            {coinsLoading ? (
              <div className="min-h-[50vh] flex items-center justify-center">
                <SpinLoader size="40px" />
              </div>
            ) : (
              <Table
                data={displayedCoin}
                template={coinMarketTable}
                currency={currency}
                currentSort={sort}
                onSortChange={(label: HEADER_LABEL) => handleOnSortChange(label)}
              />
            )}
          </div>

          <Paper className="mt-6">
            <Pagination
              dataLength={displayedCoinLength ?? 0}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onPaginationClick={(page: number) => {
                handlePagination(page);
              }}
            />
          </Paper>
        </div>
      </Container>
    </main>
  );
};

export default Home;
