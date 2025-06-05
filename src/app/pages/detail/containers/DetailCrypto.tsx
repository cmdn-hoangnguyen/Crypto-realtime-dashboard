import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import DetailChart from './components/DetailChart';
import { DetailInfoList } from './components/DetailInfoList';
import { DetailPriceChange } from './components/DetailPriceChange';
import { Button } from '../../../../components/Button';
import Container from '../../../../components/Container';
import { Paper } from '../../../../components/Paper';
import { CustomSelect } from '../../../../components/Select';
import ValueDirection from '../../../../components/ValueDirection';
import { currencyOptions, dayOptions } from '../../../../constants/data';
import { CURRENCY, DETAIL_INFO } from '../../../../constants/enum';
import useGetCoinMarketHistory from '../../../../hooks/useGetCoinMarketHistory';
import { formatCurrencyDisplay, formatValue, getColorByValue } from '../../../../utils/common';
import { useGetCoinInfo } from '../hooks/useGetCoinInfo';
import { useGetDetailMarketInfo } from '../hooks/useGetMarketInfo';

const DetailCrypto = () => {
  const [currency, setCurrency] = useState<CURRENCY>(CURRENCY.USD);
  const [days, setDays] = useState<number>(7);
  const [isCurrencySelectOpen, setIsCurrencySelectOpen] = useState(false);

  const { id } = useParams();

  const { priceHistory, detailHistory } = useGetCoinMarketHistory({
    coinId: id ?? '',
    currency: currency,
    days: days,
  });

  const marketInfo = useGetDetailMarketInfo({ detailHistory, currency });
  const coinInfo = useGetCoinInfo({ detailHistory, currency });

  const getDataByCondition = () => {
    const data = detailHistory?.market_data;

    const changeMap: Record<number, number | undefined> = {
      1: data?.price_change_percentage_24h,
      7: data?.price_change_percentage_7d,
      30: data?.price_change_percentage_30d,
      365: data?.price_change_percentage_1y,
    };

    const priceChange = changeMap[days] ?? data?.price_change_percentage_7d ?? 0;
    const color = getColorByValue(priceChange ?? 0);

    return { priceChange, color };
  };

  const renderDetailInfoList = [
    {
      data: (() => (
        <>
          {marketInfo && (
            <DetailInfoList<number>
              title="Market info"
              data={marketInfo}
              currency={currency}
              detailInfo={DETAIL_INFO.MARKET}
            />
          )}
        </>
      ))(),
    },
    {
      data: (() => (
        <>
          {coinInfo && (
            <DetailInfoList<string>
              title="Coin info"
              data={coinInfo}
              currency={currency}
              detailInfo={DETAIL_INFO.COIN}
            />
          )}
        </>
      ))(),
    },
  ];

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="detail-main pt-20">
      <Container>
        <div className="grid grid-cols-12 xl:gap-0 gap-y-12">
          <section className="xl:col-span-4 col-span-12 xl:pr-12 xl:border-r xl:border-solid xl:border-[var(--border-default)] order-1 xl:order-none">
            <div className="flex flex-col gap-4">
              <h2 className="flex items-start gap-2">
                <div className="max-w-8">
                  <img src={detailHistory?.image?.small} alt={detailHistory?.id} />
                </div>

                <span className="flex flex-col">
                  <span className="text-[var(--text-primary)] font-bold">
                    {detailHistory?.name}
                  </span>

                  <span className="text-[var(--text-secondary)] text-sm uppercase flex">
                    <span className="text-sm mr-1">#{detailHistory?.market_cap_rank}</span>
                    {detailHistory?.symbol}
                    <ValueDirection
                      classname="ml-2"
                      value={getDataByCondition()?.priceChange ?? 0}
                    />
                  </span>
                </span>
              </h2>

              <strong className="text-4xl">
                <span className="text-[var(--text-primary)]">
                  {formatCurrencyDisplay(
                    formatValue(detailHistory?.market_data?.current_price?.[currency] ?? 0) ?? '',
                    currency
                  )}
                </span>
              </strong>

              <div className="grid grid-cols-12 gap-6">
                {renderDetailInfoList?.map((item, index) => (
                  <Paper className="xl:col-span-12 md:col-span-6 col-span-12 h-fit" key={index}>
                    {item?.data}
                  </Paper>
                ))}
              </div>
            </div>
          </section>

          <section className="xl:col-span-8 col-span-12 xl:pl-12">
            <Paper className="w-full mb-6 flex items-center justify-between">
              <ul className="flex gap-2">
                {dayOptions?.map(option => (
                  <li key={option?.value}>
                    <Button
                      label={option?.label}
                      isActive={days === option.value}
                      onClick={() => setDays(option?.value)}
                    />
                  </li>
                ))}
              </ul>

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
            </Paper>

            {detailHistory && (
              <DetailChart
                priceHistory={priceHistory ?? []}
                color={getDataByCondition()?.color}
                currency={currency}
              />
            )}

            {detailHistory && (
              <DetailPriceChange classname="my-12" data={detailHistory} currency={currency} />
            )}
          </section>
        </div>
      </Container>
    </main>
  );
};

export default DetailCrypto;
