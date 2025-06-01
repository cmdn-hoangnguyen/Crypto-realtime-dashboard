import clsx from 'clsx';
import RenderTableCell from './RenderTableCell';
import type { CoinMarket, tableTemplate } from '../constants/type';
import type { CURRENCY } from '../constants/enum';

interface Props {
  data: CoinMarket[];
  currency: CURRENCY;
  template: tableTemplate[];
  classname?: string;
}

export const Table = ({ data, currency, classname, template }: Props) => {
  return (
    <table className={clsx('table w-full', classname)}>
      <thead className="table-head">
        <tr className="table-head-item">
          {template?.map(cell => (
            <th className={clsx('text-sm font-semibold p-2', cell.classname)} key={cell?.id}>
              {cell?.headerLabel}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="table-body">
        {!!data?.length &&
          data?.map(coin => (
            <tr className="table-body-item" key={coin?.id}>
              {template?.map(cell => (
                <td className={clsx('table-body-item text-sm p-2', cell.classname)} key={cell?.id}>
                  <RenderTableCell headerLabel={cell.headerLabel} data={coin} currency={currency} />
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
