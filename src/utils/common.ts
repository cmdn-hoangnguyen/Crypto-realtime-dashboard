import { CURRENCY, CURRENCY_POSITION } from '../constants/enum';

export const getColorByValue = (value: number) => {
  return value > 0 ? '#22c55e' : '#dc2626';
};

export const formatValue = (value: number, decimalPlaces = 2) => {
  if (value === undefined || value === null) return;

  const fixedValue = value.toFixed(decimalPlaces);
  const [intPart, decimalPartRaw] = fixedValue.split('.');

  const formattedInt = intPart?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (!decimalPartRaw) return formattedInt;

  const decimalPart = decimalPartRaw?.replace(/0+$/, '');

  return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
};

export const formatHugeNumber = (value: number, digits: number = 2): string => {
  if (value === null || value === undefined || isNaN(value)) return '-';

  const units = [
    { suffix: 'T', value: 1_000_000_000_000 },
    { suffix: 'B', value: 1_000_000_000 },
    { suffix: 'M', value: 1_000_000 },
    { suffix: 'K', value: 1_000 },
  ];

  for (const unit of units) {
    if (value >= unit.value) {
      return formatValue(value / unit.value) + unit.suffix;
    }
  }

  return value.toFixed(digits);
};

export const renderParagraph = (input: string) => {
  return input.replace(/\r?\n/g, '');
};

const currencyDisplayMap: Record<CURRENCY, { symbol: string; position: CURRENCY_POSITION }> = {
  [CURRENCY.USD]: { symbol: '$', position: CURRENCY_POSITION.PREFIX },
  [CURRENCY.VN]: { symbol: '₫', position: CURRENCY_POSITION.SUFFIX },
};

export function formatCurrencyDisplay(value: string, currency: CURRENCY): string {
  const { symbol, position } = currencyDisplayMap[currency] || {
    symbol: currency.toUpperCase(),
    position: CURRENCY_POSITION.PREFIX,
  };

  const formattedValue = value;

  return position === CURRENCY_POSITION.PREFIX
    ? `${symbol}${formattedValue}`
    : `${formattedValue}${symbol}`;
}

export const hexToRGBA = (hex: string, alpha: number) => {
  let r = 0,
    g = 0,
    b = 0;

  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r},${g},${b},${alpha})`;
};
