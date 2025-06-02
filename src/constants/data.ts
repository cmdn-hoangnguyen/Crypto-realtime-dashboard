import { CURRENCY, HEADER_LABEL, SORT_VALUE } from './enum';
import type { TableTemplate } from './type';

export const coinMarketTable: TableTemplate[] = [
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

export const favoriteCoin: TableTemplate[] = [
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

export const HEADER_SORT_MAPPING: Partial<
  Record<HEADER_LABEL, { asc: SORT_VALUE; desc: SORT_VALUE }>
> = {
  [HEADER_LABEL.MARKET_CAP]: {
    asc: SORT_VALUE.MARKET_CAP_ASC,
    desc: SORT_VALUE.MARKET_CAP_DESC,
  },
  [HEADER_LABEL.VOLUME_24H]: {
    asc: SORT_VALUE.VOLUME_ASC,
    desc: SORT_VALUE.VOLUME_DESC,
  },
  [HEADER_LABEL.ONE_HOUR]: {
    asc: SORT_VALUE.CHANGE_1H_ASC,
    desc: SORT_VALUE.CHANGE_1H_DESC,
  },
  [HEADER_LABEL.TWENTY_FOUR_HOURS]: {
    asc: SORT_VALUE.CHANGE_24H_ASC,
    desc: SORT_VALUE.CHANGE_24H_DESC,
  },
  [HEADER_LABEL.SEVEN_DAYS]: {
    asc: SORT_VALUE.CHANGE_7D_ASC,
    desc: SORT_VALUE.CHANGE_7D_DESC,
  },
};

export const dayOptions = [
  { label: '24H', value: 1 },
  { label: '7D', value: 7 },
  { label: '30D', value: 30 },
  { label: '1Y', value: 365 },
];

export const currencyOptions = Object.values(CURRENCY).map(currency => ({
  label: currency,
  value: currency,
}));

export const totalItemOptions = [
  {
    label: '10',
    value: 10,
  },
  {
    label: '30',
    value: 30,
  },
  {
    label: '50',
    value: 50,
  },
  {
    label: '100',
    value: 100,
  },
];

export const resources = [
  { label: 'Crypto News', href: '#' },
  { label: 'Bitcoin Treasury', href: '#' },
  { label: 'Crypto Heatmap', href: '#' },
  { label: 'Crypto API', href: '#' },
];

export const support = [
  { label: 'Request Form', href: '#' },
  { label: 'Advertising', href: '#' },
  { label: 'Candy Rewards Listing', href: '#' },
  { label: 'Help Center', href: '#' },
  { label: 'Bug Bounty', href: '#' },
  { label: 'FAQ', href: '#' },
];

export const about = [
  { label: 'About Us', href: '#' },
  { label: 'Careers', href: '#', badge: 'Join Us' }, // Có badge
  { label: 'Branding Guide', href: '#' },
  { label: 'Methodology', href: '#' },
  { label: 'Disclaimer', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Ad Policy', href: '#' },
  { label: 'Cookie Preferences', href: '#' },
];

export const community = [
  { label: 'X/Twitter', href: '#' },
  { label: 'Telegram Chat', href: '#' },
  { label: 'Telegram News', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Reddit', href: '#' },
  { label: 'Discord', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Youtube', href: '#' },
  { label: 'TikTok', href: '#' },
];

export const footerLinks = [
  { title: 'Resources', data: resources },
  { title: 'Support', data: support },
  { title: 'About CoinGecko', data: about },
  { title: 'Community', data: community },
];
