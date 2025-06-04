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
import { useRenderTrending } from '../hook/useRenderTrending';
import { Paper } from '../../../../components/Paper';
import useCoinMarketController from '../hook/useCoinMarketController';
import { InfoValueItem } from './components/InfoValueItem';
import type { TrendingCategory, TrendingCoin } from '../../../../constants/type';
import { RenderInfoValue } from './components/RenderInfoValue';
import { SectionLayout } from '../../../../components/SectionLayout';
import { useGlobalMarket } from '../../../../hooks/useGlobalMarket';
import RenderGlobal from './components/RenderGlobal';

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

  const { globalMarket } = useGlobalMarket();

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
    <main className="main-home pt-20">
      <Container>
        <div className="flex flex-col">
          <SectionLayout
            title="Global Market"
            subTitle="Discover the most talked-about cryptocurrencies and market movers now!"
          >
            <div className="grid grid-cols-12 gap-6 mb-12">
              <div className="max-h-[280px] lg:col-span-4 col-span-12 flex flex-col justify-between h-[280px]">
                <div className="max-h-[280px] lg:col-span-4 col-span-12 flex flex-col justify-between h-[280px]">
                  <RenderGlobal
                    title="Total market"
                    value={globalMarket?.total_market_cap?.[currency] ?? 0}
                    currency={currency}
                    subtitle="Market Cap"
                    imgUrl="https://www.coingecko.com/total_market_cap.svg"
                    alt="Market Cap"
                  />

                  <RenderGlobal
                    title="Total volume"
                    value={globalMarket?.total_volume?.[currency] ?? 0}
                    currency={currency}
                    subtitle="24H trading volume"
                    imgUrl="https://www.coingecko.com/total_volume.svg"
                    alt="Total volume"
                  />
                </div>
              </div>

              <div className="lg:col-span-4 col-span-12">
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

              <div className="lg:col-span-4 col-span-12">
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
              <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center items-end">
                <TableTitle
                  label={
                    <span className="text-[var(--text-primary)] flex gap-2">
                      Sorted by {SORT_OPTIONS[sort]}
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
          </SectionLayout>
        </div>
      </Container>
    </main>
  );
};

export default Home;
