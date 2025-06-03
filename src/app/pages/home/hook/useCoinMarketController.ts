import { useEffect, useMemo } from 'react';
import type { CURRENCY, SORT_VALUE } from '../../../../constants/enum';
import useGetCoinMarket from '../../../../hooks/useGetCoinMarket';
import useSearchCoin from '../../../../hooks/useSearchCoin';

interface Props {
  debouncedInput: string;
  currency: CURRENCY;
  currentPage: number;
  itemsPerPage: number;
  order?: SORT_VALUE;
}

const useCoinMarketController = ({
  debouncedInput,
  currency,
  order,
  currentPage,
  itemsPerPage,
}: Props) => {
  const hasSearch = useMemo(() => debouncedInput.length > 2, [debouncedInput]);

  const { coins, coinsLoading, coinsLength, refetch } = useGetCoinMarket({
    currency: currency,
    currentPage: currentPage,
    totalItems: itemsPerPage,
    order: order,
  });

  const { coinList, searchCoinLoading } = useSearchCoin({
    input: debouncedInput,
    currency: currency,
    currentPage: currentPage,
    totalItems: itemsPerPage,
    isGetAll: false,
  });

  const { searchCoinLength } = useSearchCoin({
    input: debouncedInput,
    currency: currency,
    currentPage: currentPage,
    totalItems: itemsPerPage,
    isGetAll: true,
  });

  useEffect(() => {
    if (hasSearch) return;

    const interval = setInterval(() => {
      refetch();
    }, 5000);

    return () => clearInterval(interval);
  }, [hasSearch, refetch]);

  const displayedCoin = hasSearch ? coinList : (coins ?? []);
  const displayedCoinLength = hasSearch ? searchCoinLength : (coinsLength ?? 0);

  return { displayedCoin, displayedCoinLength, coinsLoading, searchCoinLoading };
};

export default useCoinMarketController;
