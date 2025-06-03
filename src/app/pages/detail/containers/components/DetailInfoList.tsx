import type { JSX } from 'react';
import { DETAIL_INFO, type CURRENCY } from '../../../../../constants/enum';
import type { RenderData } from '../../../../../constants/type';
import { formatValue, getCurrency } from '../../../../../utils/common';

interface Props<T = number | string> {
  title: string;
  data: RenderData<T>[];
  currency: CURRENCY;
  detailInfo: DETAIL_INFO;
}

export const DetailInfoList = <T,>({ title, data, currency, detailInfo }: Props<T>) => {
  let renderData: (value?: T, index?: number) => JSX.Element;

  switch (detailInfo) {
    case DETAIL_INFO.MARKET:
      renderData = (value?: T, index?: number) => {
        const numValue = Number(value) || 0;
        return (
          <>
            {(index === 0 || index === 1) && getCurrency(currency)}
            {formatValue(numValue)}
          </>
        );
      };
      break;

    case DETAIL_INFO.COIN:
      renderData = (value?: T, index?: number) => <>{value}</>;
      break;

    default:
      renderData = () => <></>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-xl">{title}</h3>

      <ul className="flex flex-col">
        {data?.map((info, index) => (
          <li className="py-4 border-b border-solid border-[var(--border-default)]" key={index}>
            <div className="flex justify-between">
              <span className="text-[var(--color-muted-dark)]">{info?.label}</span>

              <span className="font-semibold">{renderData(info?.value, index)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
