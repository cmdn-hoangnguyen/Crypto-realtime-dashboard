import { useEffect, useRef, useState, type ChangeEventHandler } from 'react';

import { InfoValueItem } from './components/InfoValueItem';
import RenderGlobal from './components/RenderGlobal';
import { RenderInfoValue } from './components/RenderInfoValue';
import { Button } from '../../../../components/Button';
import Container from '../../../../components/Container';
import Pagination from '../../../../components/Pagination';
import { Paper } from '../../../../components/Paper';
import SearchInput from '../../../../components/SearchInput';
import { SectionLayout } from '../../../../components/SectionLayout';
import { CustomSelect } from '../../../../components/Select';
import { SpinLoader } from '../../../../components/SpinLoader';
import { Table } from '../../../../components/Table';
import { TableTitle } from '../../../../components/TableTitle';
import {
  coinMarketTable,
  currencyOptions,
  HEADER_SORT_MAPPING,
  SORT_OPTIONS,
  totalItemOptions,
} from '../../../../constants/data';
import { BUTTON_LABEL, CURRENCY, HEADER_LABEL, SORT_VALUE } from '../../../../constants/enum';
import type { TrendingCategory, TrendingCoin } from '../../../../constants/type';
import useDebounce from '../../../../hooks/useDebounce';
import { useGlobalMarket } from '../../../../hooks/useGlobalMarket';
import useCoinMarketController from '../hook/useCoinMarketController';
import { useRenderTrending } from '../hook/useRenderTrending';
import { checkMobileScreen } from '../../../../utils/common';

const Home = () => {
  const [currency, setCurrency] = useState(CURRENCY.USD);
  const [sort, setSort] = useState<SORT_VALUE>(SORT_VALUE.MARKET_CAP_DESC);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [isCurrencySelectOpen, setIsCurrencySelectOpen] = useState(false);
  const [isTotalItemsSelectOpen, setIsTotalItemsSelectOpen] = useState(false);

  // Ref table for pagination
  // Scroll on top when paginate
  const tableRef = useRef<HTMLDivElement>(null);

  const debouncedInput = useDebounce({ value: inputValue });

  // Controller getting/searching coin market
  const { displayedCoin, displayedCoinLength, coinsLoading, searchCoinLoading } =
    useCoinMarketController({
      debouncedInput: debouncedInput,
      currency: currency,
      currentPage: currentPage,
      itemsPerPage: itemsPerPage,
      order: sort,
    });

  // Get trending and categories data
  const [coinTrending, categoryTrending] = useRenderTrending({ currency });

  // Global market information (Market cap & 24H global)
  const { globalMarket } = useGlobalMarket();

  // Search input
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    setInputValue(event.target.value);
  };

  // Sort table
  const handleOnSortChange = (label: HEADER_LABEL) => {
    const sortMap = HEADER_SORT_MAPPING?.[label];
    if (!sortMap) return;

    setCurrentPage(1);
    setSort(prev => (prev === sortMap.desc ? sortMap.asc : sortMap.desc));
  };

  // Handle pagination
  const handlePagination = (page: number) => {
    setCurrentPage(page);
    tableRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Debouncing for search input
  useEffect(() => {
    if (debouncedInput.length > 2 || debouncedInput.length === 0) {
      setCurrentPage(1);
    }
  }, [debouncedInput]);

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="main-home pt-20">
      <Container>
        <div className="flex flex-col gap-12">
          <SectionLayout
            title="Global Market"
            subTitle="Discover the most talked-about cryptocurrencies and market movers now!"
          >
            <div className="grid grid-cols-12 grid-rows-2 lg:gap-2 gap-6">
              <div className="lg:col-span-4 col-span-12 order-1">
                <RenderGlobal
                  title="Total market"
                  value={globalMarket?.total_market_cap?.[currency] ?? 0}
                  currency={currency}
                  subtitle="Market Cap"
                  imgUrl="https://www.coingecko.com/total_market_cap.svg"
                  alt="Market Cap"
                />
              </div>

              <div className="lg:col-span-4 col-span-12 lg:order-4 order-2">
                <RenderGlobal
                  title="Total volume"
                  value={globalMarket?.total_volume?.[currency] ?? 0}
                  currency={currency}
                  subtitle="24H trading volume"
                  imgUrl="https://www.coingecko.com/total_volume.svg"
                  alt="Total volume"
                />
              </div>

              <div className="lg:col-span-4 col-span-12 row-span-2">
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

              <div className="lg:col-span-4 col-span-12 row-span-2">
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
          </SectionLayout>

          <SectionLayout
            title="Crypto Market Dashboard"
            subTitle="Get a real-time overview of the crypto market, including prices, trends, and top assets."
          >
            <Paper className="mb-6">
              <div
                className="flex flex-col md:flex-row md:gap-4 gap-2 justify-between items-center"
                ref={tableRef}
              >
                <TableTitle
                  label={
                    <span className="text-[var(--text-primary)] flex gap-2s">
                      Sorted by {SORT_OPTIONS[sort]}
                    </span>
                  }
                />

                <div className="table-actions flex gap-2 md:w-fit w-full md:mb-0 mb-1">
                  <SearchInput
                    classname="md:w-fit w-full"
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
                    ariaLabel={BUTTON_LABEL.SELECT_CURRENCY}
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
                    ariaLabel={BUTTON_LABEL.SELECT_DAYS}
                  />
                </div>
              </div>
            </Paper>

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

            {displayedCoinLength && displayedCoinLength > itemsPerPage && (
              <Paper className="mt-6">
                <Pagination
                  dataLength={displayedCoinLength}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  onPaginationClick={(page: number) => {
                    handlePagination(page);
                  }}
                />
              </Paper>
            )}
          </SectionLayout>
        </div>
      </Container>
    </main>
  );
};

export default Home;
