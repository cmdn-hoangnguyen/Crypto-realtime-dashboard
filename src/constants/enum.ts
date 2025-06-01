export enum CURRENCY {
  USD = 'usd',
  VN = 'vnd',
}

export enum SORT_VALUE {
  MARKET_CAP_DESC = 'market_cap_desc',
  MARKET_CAP_ASC = 'market_cap_asc',
  VOLUME_DESC = 'volume_desc',
  VOLUME_ASC = 'volume_asc',
  NAME_ASC = 'id_asc',
  NAME_DESC = 'id_desc',
  CHANGE_1H_ASC = 'change_1h_asc',
  CHANGE_1H_DESC = 'change_1h_desc',
  CHANGE_24H_ASC = 'change_24h_asc',
  CHANGE_24H_DESC = 'change_24h_desc',
  CHANGE_7D_ASC = 'change_7d_asc',
  CHANGE_7D_DESC = 'change_7d_desc',
}

export enum BUTTON_VARIANT {
  DEFAULT = 'btn-variant-default',
  SUCCESS = 'btn-variant-success',
}

export enum BUTTON_VARIANT_ACTIVE {
  DEFAULT = `${BUTTON_VARIANT.DEFAULT}-active`,
  SUCCESS = `${BUTTON_VARIANT.SUCCESS}-active`,
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
}

export enum PATHNAME {
  DETAIL = 'detail',
  FAVORITE = 'favorite',
}
