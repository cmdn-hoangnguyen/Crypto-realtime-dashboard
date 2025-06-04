import { fetcher } from '../libs/fetcher';
import {
  endpointSearchAllDetailCoinMarket,
  endpointSearchAllGeneralCoinById,
  endpointSearchDetailCoinMarket,
} from '../constants/api';
import useSWR from 'swr';
import { useMemo } from 'react';
import type { CoinMarket, CoinResearchResult, FetchDataProps } from '../constants/type';
import { SORT_VALUE, type CURRENCY } from '../constants/enum';

interface GetAllProps {
  input: string;
  currency: CURRENCY;
  isGetAll: boolean;
}

type PaginatedProps = FetchDataProps & GetAllProps;

type Props = GetAllProps | PaginatedProps;

const useSearchCoin = (props: Props) => {
  const { input, currency } = props;
  const shouldFetch = input.length > 2;
  const query = shouldFetch ? endpointSearchAllGeneralCoinById({ input: input }) : null;

  // API RETURN GENERAL INFO
  const { data: generalData, isLoading: isGeneralDataLoading } = useSWR(query, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300,
  });

  const arrayIds = useMemo(() => {
    if (!generalData?.coins?.length) return null;
    return generalData?.coins?.map((coin: CoinResearchResult) => coin?.id).join(',');
  }, [generalData]);

  // API RETURN DETAIL INFO
  const {
    isGetAll = false,
    order = SORT_VALUE.MARKET_CAP_DESC,
    totalItems,
    currentPage,
  } = props as PaginatedProps;

  const endpoint = isGetAll
    ? endpointSearchAllDetailCoinMarket({ arrayIds: arrayIds, currency: currency })
    : endpointSearchDetailCoinMarket({
        currency: currency,
        order: order,
        totalItems: totalItems,
        currentPage: currentPage,
        arrayIds: arrayIds,
      });

  const marketQuery = arrayIds ? endpoint : null;

  const { data: marketData, isLoading: marketLoading } = useSWR<CoinMarket[]>(
    marketQuery,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 300,
    }
  );

  return {
    rawCoin: generalData?.coins,
    coinList: marketData ?? [],
    searchCoinLoading: marketLoading,
    rawCoinLoading: isGeneralDataLoading,
    searchCoinLength: marketData?.length,
  };
};

export default useSearchCoin;
