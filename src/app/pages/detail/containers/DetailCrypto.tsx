import { useState } from 'react';
import Container from '../../../../components/Container';
import DetailChart from './components/DetailChart';
import { CURRENCY, DETAIL_INFO } from '../../../../constants/enum';
import { useParams } from 'react-router-dom';
import useGetCoinMarketHistory from '../../../../hooks/useGetCoinMarketHistory';
import { formatValue, getColorByValue, getCurrency } from '../../../../utils/common';
import { Button } from '../../../../components/Button';
import { dayOptions } from '../../../../constants/data';
import ValueDirection from '../../../../components/ValueDirection';
import { DetailInfoList } from './components/DetailInfoList';
import { useGetDetailMarketInfo } from '../hooks/useGetMarketInfo';
import { useGetCoinInfo } from '../hooks/useGetCoinInfo';
import { DetailPriceChange } from './components/DetailPriceChange';

const DetailCrypto = () => {
  const [currency] = useState<CURRENCY>(CURRENCY.USD);
  const [days, setDays] = useState<number>(7);

  const { id } = useParams();

  const { priceHistory, detailHistory } = useGetCoinMarketHistory({
    coinId: id ?? '',
    currency: currency,
    days: days,
  });

  const marketInfo = detailHistory && useGetDetailMarketInfo({ detailHistory, currency });
  const coinInfo = detailHistory && useGetCoinInfo({ detailHistory, currency });

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

  return (
    <main>
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-4 pr-12 border-r border-solid border-[var(--border-default)]">
            <div className="flex flex-col gap-4">
              <h2 className="flex items-start gap-2">
                <div className="max-w-8">
                  <img src={detailHistory?.image?.small} alt={detailHistory?.id} />
                </div>

                <span className="flex flex-col">
                  <span className="font-bold">{detailHistory?.name}</span>

                  <span className="text-[var(--color-muted)] uppercase flex gap-2">
                    {detailHistory?.symbol}
                    <ValueDirection value={getDataByCondition()?.priceChange ?? 0} />
                  </span>
                </span>
              </h2>

              <strong className="text-4xl">
                <span>{getCurrency(currency)}</span>
                <span>
                  {formatValue(detailHistory?.market_data?.current_price?.[currency] ?? 0)}
                </span>
              </strong>

              {marketInfo && (
                <DetailInfoList<number>
                  title="Market info"
                  data={marketInfo}
                  currency={currency}
                  detailInfo={DETAIL_INFO.MARKET}
                />
              )}

              {coinInfo && (
                <DetailInfoList<string>
                  title="Coin info"
                  data={coinInfo}
                  currency={currency}
                  detailInfo={DETAIL_INFO.COIN}
                />
              )}
            </div>
          </div>

          <div className="col-span-8 pl-12">
            <div className="flex items-center justify-between">
              <ul className="flex gap-2 mb-6">
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
            </div>

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

            {/* {detailHistory?.description?.[LANGUAGE.en]} */}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default DetailCrypto;
