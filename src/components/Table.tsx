import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import RenderTableCell from './RenderTableCell';
import { HEADER_SORT_MAPPING } from '../constants/data';
import { HEADER_LABEL, type CURRENCY, type SORT_VALUE } from '../constants/enum';
import type { CoinMarket, TableTemplate } from '../constants/type';

interface Props {
  data: CoinMarket[];
  currency: CURRENCY;
  currentSort: SORT_VALUE;
  template: TableTemplate[];
  onSortChange: (label: HEADER_LABEL) => void;
  classname?: string;
  onFavoriteUpdated?: () => void;
}

export const Table = ({
  data,
  currency,
  classname,
  template,
  onSortChange,
  currentSort,
  onFavoriteUpdated,
}: Props) => {
  return (
    <div className="border border-solid border-[var(--border-default)] rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        {data?.length ? (
          <table className={clsx('table w-full overflow-x-scroll', classname)}>
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
                        'text-sm text-[var(--text-secondary)] font-semibold xl:p-4 p-2 cursor-pointer',
                        cell?.classname,
                        cell?.headerClass
                      )}
                      onClick={() => {
                        if (isSortable && onSortChange) {
                          return onSortChange(cell?.headerLabel);
                        }
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <span>{cell?.headerLabel !== HEADER_LABEL.FAV && cell?.headerLabel}</span>

                        {isCurrentSort && (
                          <FontAwesomeIcon
                            icon={isDesc ? faArrowDown : faArrowUp}
                            className="text-xs"
                          />
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="table-body">
              {data?.map(coin => (
                <tr
                  className="table-body-item group border-b border-solid border-[var(--border-default)]"
                  key={coin?.id}
                >
                  {template?.map(cell => (
                    <td
                      className={clsx(
                        'table-body-item text-[var(--text-primary)] lg:text-sm text-[12px] group-hover:bg-[var(--bg-secondary)] xl:p-4 p-2',
                        cell.classname,
                        cell?.bodyClass
                      )}
                      key={cell?.id}
                    >
                      <RenderTableCell
                        headerLabel={cell.headerLabel}
                        data={coin}
                        currency={currency}
                        onFavoriteUpdated={onFavoriteUpdated}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <img className="w-full" src="./images/empty-table.png" alt="Empty table" />
        )}
      </div>
    </div>
  );
};
