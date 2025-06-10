export enum CURRENCY {
  USD = 'usd',
  VN = 'vnd',
}

export enum LANGUAGE {
  en = 'en',
}

export enum SORT_VALUE {
  MARKET_CAP_DESC = 'market_cap_desc',
  MARKET_CAP_ASC = 'market_cap_asc',
  VOLUME_DESC = 'volume_desc',
  VOLUME_ASC = 'volume_asc',
  NAME_ASC = 'id_asc',
  NAME_DESC = 'id_desc',
  CHANGE_1H_ASC = 'price_change_percentage_1h_in_currency_asc',
  CHANGE_1H_DESC = 'price_change_percentage_1h_in_currency_desc',
  CHANGE_24H_ASC = 'price_change_percentage_24h_in_currency_asc',
  CHANGE_24H_DESC = 'price_change_percentage_24h_in_currency_desc',
  CHANGE_7D_ASC = 'price_change_percentage_7d_in_currency_asc',
  CHANGE_7D_DESC = 'price_change_percentage_7d_in_currency_desc',
  PRICE_ASC = 'current_price_asc',
  PRICE_DESC = 'current_price_desc',
}

export enum BUTTON_LABEL {
  SELECT_CURRENCY = 'Select currency button',
  SELECT_DAYS = 'Select days button',
  BACK_TO_HOMEPAGE = 'Back to homepage button',
  HEADER_ITEM_LIST = 'Header item list button',
  SEARCH = 'Search button',
  FAVORITE_NAVIGATION = 'Navigate to favorite page button',
  TOGGLE_THEME = 'Toggle theme button',
  PAGINATION_NEXT = 'Paginate to next page button',
  PAGINATION_PREV = 'Paginate to previous page button',
  PAGINATION_DETAIL = 'Paginate to page',
}

export enum BUTTON_VARIANT {
  DEFAULT = 'btn-variant-default',
  ACCENT = 'btn-variant-accent',
  PRIMARY = 'btn-variant-primary',
  HEART = 'btn-variant-heart',
  INFO = 'btn-variant-info',
}

export enum BADGE_VARIANT {
  PRIMARY = 'badge-variant-primary',
  SECONDARY = 'badge-variant-secondary',
  INFO = 'badge-variant-info',
  ERROR = 'badge-variant-error',
}

export enum HEADER_LABEL {
  FAV = 'Fav',
  COIN = 'Coin',
  PRICE = 'Price',
  ONE_HOUR = '1H',
  TWENTY_FOUR_HOURS = '24H',
  SEVEN_DAYS = '7D',
  VOLUME_24H = '24H volume',
  MARKET_CAP = 'Market cap',
  LAST_7_DAYS = 'Last 7 Days',
  ACTION = 'Action',
}

export enum LOCAL_STORAGE_KEY {
  FAVORITE = 'favorite',
  THEME = 'theme',
}

export enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum PATHNAME {
  DETAIL = 'detail',
  FAVORITE = 'favorite',
}

export enum DETAIL_INFO {
  MARKET = 'market',
  COIN = 'coin',
}

export enum ERROR_TYPE {
  PAGE = 'PAGE',
}

export enum CURRENCY_POSITION {
  PREFIX = 'prefix',
  SUFFIX = 'suffix',
}

export enum TIME {
  ONE_DAY = '1',
  SEVEN_DAY = '7',
  ONE_MONTH = '30',
  ONE_YEAR = '365',
}
