import { useEffect, useState, type ChangeEventHandler } from 'react';

import clsx from 'clsx';

import Container from '../../../../components/Container';
import RenderTableCell from '../../../../components/RenderTableCell';
import SearchInput from '../../../../components/SearchInput';
import { coinMarketTable } from '../../../../constants/data';
import { CURRENCY } from '../../../../constants/enum';
import type { CoinMarket } from '../../../../constants/type';
import useGetCoinMarket from '../../../../hooks/useGetCoinMarket';
import useSearchCoin from '../../../../hooks/useSearchCoin';
import useDebounce from '../../../../hooks/useDebounce';
import { SpinLoader } from '../../../../components/SpinLoader';

const Home = () => {
  const [currency] = useState(CURRENCY.USD);
  const [itemsPerPage] = useState(10);
  const [currentPage] = useState(1);
  const [inputValue, setInputValue] = useState<string>('');
  const [marketData, setMarketData] = useState<CoinMarket[]>([]);
  const debouncedInput = useDebounce({ value: inputValue });

  const { coins, coinsLoading } = useGetCoinMarket({
    currency: currency,
    totalItems: itemsPerPage,
    currentPage: currentPage,
  });

  const { coinList, searchCoinLoading } = useSearchCoin({
    input: debouncedInput,
    currency: currency,
    currentPage: currentPage,
    totalItems: itemsPerPage,
    isGetAll: false,
  });

  useEffect(() => {
    if (debouncedInput.length > 2 && coinList?.length) {
      setMarketData(coinList);
    } else {
      setMarketData(coins ?? []);
    }
  }, [debouncedInput, coinList, coins]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    setInputValue(event.target.value);
  };

  if (coinsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main-home">
      <Container>
        <div className="flex flex-col gap-1">
          <div className="table-actions flex gap-2">
            <button>
              <i></i>
            </button>

            <div className="flex items-center gap-2">
              <SearchInput
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search coin..."
              />

              {searchCoinLoading && <SpinLoader size="20px" />}
            </div>
          </div>

          <table className="table w-full">
            <thead className="table-head">
              <tr className="table-head-item">
                {coinMarketTable?.map(cell => (
                  <th className={clsx('text-sm font-semibold p-2', cell.className)} key={cell?.id}>
                    {cell?.headerLabel}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="table-body">
              {!!marketData?.length &&
                marketData?.map(coin => (
                  <tr className="table-body-item" key={coin?.id}>
                    {coinMarketTable?.map((cell, cellIndex) => (
                      <td
                        className={clsx('table-body-item text-sm p-2', cell.className)}
                        key={cell?.id}
                      >
                        <RenderTableCell data={coin} colIndex={cellIndex} currency={currency} />
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Container>
    </main>
  );
};

export default Home;
