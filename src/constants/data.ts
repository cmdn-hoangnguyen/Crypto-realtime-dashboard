import { CURRENCY, ERROR_TYPE, HEADER_LABEL, SORT_VALUE, TIME } from './enum';
import { AXIOS_ERROR_CODE } from './errorEnum';
import type { TableTemplate } from './type';

export const coinMarketTable: TableTemplate[] = [
  {
    id: 1,
    headerLabel: HEADER_LABEL.FAV,
    classname: '',
    headerClass: '',
    bodyClass: '',
  },
  {
    id: 2,
    headerLabel: HEADER_LABEL.COIN,
    classname:
      'w-[200px] max-w-[40vw] sticky left-[-1px] top-[-1px] border-b-[var(--border-default)]',
    headerClass: 'bg-[var(--bg-secondary)]',
    bodyClass:
      'bg-[var(--bg-primary)] border border-solid group-hover:border-t-[var(--bg-secondary)] group-hover:border-l-[var(--bg-secondary)] group-hover:border-r-[var(--bg-secondary)] border-t-transparent border-l-transparent border-r-transparent',
  },
  {
    id: 3,
    headerLabel: HEADER_LABEL.PRICE,
    classname: '',
    headerClass: '',
    bodyClass: '',
  },
  {
    id: 4,
    headerLabel: HEADER_LABEL.ONE_HOUR,
    classname: '',
    headerClass: '',
    bodyClass: '',
  },
  {
    id: 5,
    headerLabel: HEADER_LABEL.TWENTY_FOUR_HOURS,
    classname: '',
    headerClass: '',
    bodyClass: '',
  },
  {
    id: 6,
    headerLabel: HEADER_LABEL.SEVEN_DAYS,
    classname: '',
    headerClass: '',
    bodyClass: '',
  },
  {
    id: 7,
    headerLabel: HEADER_LABEL.VOLUME_24H,
    classname: '',
    headerClass: 'min-w-32',
    bodyClass: '',
  },
  {
    id: 8,
    headerLabel: HEADER_LABEL.MARKET_CAP,
    classname: '',
    headerClass: 'min-w-32',
    bodyClass: '',
  },
  {
    id: 9,
    headerLabel: HEADER_LABEL.LAST_7_DAYS,
    classname: 'w-[150px]',
    headerClass: '',
    bodyClass: '',
  },
];

export const favoriteCoin: TableTemplate[] = [
  { id: 0, headerLabel: HEADER_LABEL.ACTION, classname: 'text-center' },
  ...coinMarketTable.slice(1),
];

export const SORT_OPTIONS: Record<SORT_VALUE, string> = {
  [SORT_VALUE.MARKET_CAP_DESC]: 'Market Cap',
  [SORT_VALUE.MARKET_CAP_ASC]: 'Market Cap',
  [SORT_VALUE.VOLUME_DESC]: '24H volume',
  [SORT_VALUE.VOLUME_ASC]: '24H volume',
  [SORT_VALUE.NAME_ASC]: 'Coin',
  [SORT_VALUE.NAME_DESC]: 'Coin',
  [SORT_VALUE.CHANGE_1H_ASC]: '1H',
  [SORT_VALUE.CHANGE_1H_DESC]: '1H',
  [SORT_VALUE.CHANGE_24H_ASC]: '24H',
  [SORT_VALUE.CHANGE_24H_DESC]: '24H',
  [SORT_VALUE.CHANGE_7D_ASC]: '7D',
  [SORT_VALUE.CHANGE_7D_DESC]: '7D',
  [SORT_VALUE.PRICE_ASC]: 'Price',
  [SORT_VALUE.PRICE_DESC]: 'Price',
};

export const HEADER_SORT_MAPPING: Partial<
  Record<HEADER_LABEL, { asc: SORT_VALUE; desc: SORT_VALUE }>
> = {
  [HEADER_LABEL.COIN]: {
    asc: SORT_VALUE.NAME_ASC,
    desc: SORT_VALUE.NAME_DESC,
  },
  [HEADER_LABEL.MARKET_CAP]: {
    asc: SORT_VALUE.MARKET_CAP_ASC,
    desc: SORT_VALUE.MARKET_CAP_DESC,
  },
  [HEADER_LABEL.VOLUME_24H]: {
    asc: SORT_VALUE.VOLUME_ASC,
    desc: SORT_VALUE.VOLUME_DESC,
  },
  [HEADER_LABEL.PRICE]: {
    asc: SORT_VALUE.PRICE_ASC,
    desc: SORT_VALUE.PRICE_DESC,
  },
};

export const headerNavigate = [
  {
    label: 'About us',
    href: '/#',
  },
  {
    label: 'NFT',
    href: '/#',
  },
  {
    label: 'Community',
    href: '/#',
  },
];

export const dayOptions = [
  { label: '24H', value: TIME.ONE_DAY },
  { label: '7D', value: TIME.SEVEN_DAY },
  { label: '30D', value: TIME.ONE_MONTH },
  { label: '1Y', value: TIME.ONE_YEAR },
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
  { label: 'Careers', href: '#', badge: 'Join Us' },
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
  { title: 'About Legit', data: about },
  { title: 'Community', data: community },
];

export const AXIOS_ERROR_MESSAGES: Record<AXIOS_ERROR_CODE, string> = {
  [AXIOS_ERROR_CODE.TIMEOUT]: 'Request timed out. Please try again later.',
  [AXIOS_ERROR_CODE.TOO_MANY_REQUESTS]: 'Request limit reached! Please wait a moment.',
  [AXIOS_ERROR_CODE.NO_RESPONSE]: 'No response from server. Maybe CORS/network issue.',
};

export const errorData = {
  [ERROR_TYPE.PAGE]: {
    image: {
      url: '/images/not-found.png',
      alt: 'Not found',
    },
  },
};
