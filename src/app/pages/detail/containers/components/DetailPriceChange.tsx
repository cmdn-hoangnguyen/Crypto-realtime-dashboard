import clsx from 'clsx';
import ValueDirection from '../../../../../components/ValueDirection';
import type { CURRENCY } from '../../../../../constants/enum';
import type { CoinHistory } from '../../../../../constants/type';
import { useGetPriceChangeList } from '../../hooks/useGetPriceChangeList';

interface Props {
  data: CoinHistory;
  currency: CURRENCY;
  classname?: string;
}

export const DetailPriceChange = ({ data, currency, classname }: Props) => {
  const detailPriceChangeList = useGetPriceChangeList({ data, currency });

  const borderClass = (index: number) => {
    return clsx(
      index === detailPriceChangeList?.length - 1 && 'border-none',
      'border-r border-solid border-[var(--border-default)]'
    );
  };

  return (
    <ul
      className={clsx(
        classname,
        'max-w-full grid grid-cols-12 border border-solid border-[var(--border-default)] overflow-hidden rounded-lg'
      )}
    >
      {detailPriceChangeList?.map((detail, index) => (
        <li
          key={index}
          className="md:col-span-2 sm:col-span-4 col-span-6 flex items-center justify-center"
        >
          <div className="flex flex-col w-full">
            <div className="text-sm text-[var(--text-primary)] p-2 text-center bg-[var(--bg-secondary)]">
              {detail?.label}
            </div>

            <div className={clsx(borderClass(index), 'p-2')}>
              <ValueDirection classname="text-sm justify-center" value={detail?.value ?? 0} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
