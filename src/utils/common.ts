import { CURRENCY } from '../constants/enum';

export const getColorByValue = (value: number) => {
  return value > 0 ? '#22c55e' : '#dc2626';
};

export const getCurrency = (currency: CURRENCY) => {
  switch (currency) {
    case CURRENCY.USD:
      return '$';
    case CURRENCY.VN:
      return 'VND';
    default:
      return '$';
  }
};

export const formatValue = (value: number) => {
  const [intPart, decimalPartRaw] = value.toString().split('.');

  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (!decimalPartRaw) return formattedInt;

  const decimalPart = decimalPartRaw.replace(/0+$/, '');

  return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
};
