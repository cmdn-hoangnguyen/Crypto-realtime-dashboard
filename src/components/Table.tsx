import clsx from 'clsx';
import RenderTableCell from './RenderTableCell';
import type { CoinMarket, TableTemplate } from '../constants/type';
import type { CURRENCY, HEADER_LABEL, SORT_VALUE } from '../constants/enum';
import { HEADER_SORT_MAPPING } from '../constants/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface Props {
  data: CoinMarket[];
  currency: CURRENCY;
  currentSort: SORT_VALUE;
  template: TableTemplate[];
  onSortChange: (label: HEADER_LABEL) => void;
  classname?: string;
}

export const Table = ({
  data,
  currency,
  classname,
  template,
  onSortChange,
  currentSort,
}: Props) => {
  return (
    <table className={clsx('table w-full', classname)}>
      <thead className="table-head bg-[var(--bg-secondary)]">
        <tr className="table-head-item">
          {template?.map(cell => {
            const isSortable = HEADER_SORT_MAPPING[cell.headerLabel];
            const sortMapping = HEADER_SORT_MAPPING[cell.headerLabel];
            const isCurrentSort =
              sortMapping?.asc === currentSort || sortMapping?.desc === currentSort;
            const isDesc = sortMapping?.desc === currentSort;

            return (
              <th
                key={cell.id}
                className={clsx(
                  'text-sm text-[var(--text-secondary)] font-semibold p-4 cursor-pointer select-none',
                  cell.classname
                )}
                onClick={() => {
                  if (isSortable && onSortChange) onSortChange(cell.headerLabel);
                }}
              >
                <div className="flex items-center gap-1">
                  <span>{cell.headerLabel}</span>
                  {isCurrentSort && (
                    <FontAwesomeIcon icon={isDesc ? faArrowDown : faArrowUp} className="text-xs" />
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className="table-body">
        {!!data?.length &&
          data?.map(coin => (
            <tr
              className="table-body-item group hover:bg-[var(--bg-secondary)] duration-150"
              key={coin?.id}
            >
              {template?.map((cell, cellIndex) => (
                <td
                  className={clsx(
                    'table-body-item text-sm p-4',
                    cell.classname,
                    cellIndex === 1 && 'group-hover:font-bold duration-150'
                  )}
                  key={cell?.id}
                >
                  <RenderTableCell headerLabel={cell.headerLabel} data={coin} currency={currency} />
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
