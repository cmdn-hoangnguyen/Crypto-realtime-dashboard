import { HEADER_LABEL, SORT_VALUE } from './enum';
import type { tableTemplate } from './type';

export const coinMarketTable: tableTemplate[] = [
  {
    id: 1,
    headerLabel: HEADER_LABEL.FAV,
    classname: 'text-left',
  },
  {
    id: 2,
    headerLabel: HEADER_LABEL.COIN,
    classname: 'text-left w-[280px]',
  },
  {
    id: 3,
    headerLabel: HEADER_LABEL.PRICE,
    classname: 'text-right',
  },
  {
    id: 4,
    headerLabel: HEADER_LABEL.ONE_HOUR,
    classname: 'text-right',
  },
  {
    id: 5,
    headerLabel: HEADER_LABEL.TWENTY_FOUR_HOURS,
    classname: 'text-right',
  },
  {
    id: 6,
    headerLabel: HEADER_LABEL.SEVEN_DAYS,
    classname: 'text-right',
  },
  {
    id: 7,
    headerLabel: HEADER_LABEL.VOLUME_24H,
    classname: 'text-right',
  },
  {
    id: 8,
    headerLabel: HEADER_LABEL.MARKET_CAP,
    classname: 'text-right',
  },
  {
    id: 9,
    headerLabel: HEADER_LABEL.LAST_7_DAYS,
    classname: 'text-right',
  },
];

export const favoriteCoin: tableTemplate[] = [
  { id: 0, headerLabel: HEADER_LABEL.ACTION, classname: 'text-center' },
  ...coinMarketTable.slice(1),
];

export const SORT_OPTIONS: Record<SORT_VALUE, string> = {
  [SORT_VALUE.MARKET_CAP_DESC]: 'Market Cap',
  [SORT_VALUE.MARKET_CAP_ASC]: 'Market Cap',
  [SORT_VALUE.VOLUME_DESC]: 'Volume',
  [SORT_VALUE.VOLUME_ASC]: 'Volume',
  [SORT_VALUE.NAME_ASC]: 'Name',
  [SORT_VALUE.NAME_DESC]: 'Name',
  [SORT_VALUE.CHANGE_1H_ASC]: '1H Change',
  [SORT_VALUE.CHANGE_1H_DESC]: '1H Change',
  [SORT_VALUE.CHANGE_24H_ASC]: '24H Change',
  [SORT_VALUE.CHANGE_24H_DESC]: '24H Change',
  [SORT_VALUE.CHANGE_7D_ASC]: '7D Change',
  [SORT_VALUE.CHANGE_7D_DESC]: '7D Change',
};
