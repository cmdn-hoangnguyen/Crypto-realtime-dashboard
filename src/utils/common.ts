import { BUTTON_VARIANT, BUTTON_VARIANT_ACTIVE, CURRENCY } from '../constants/enum';

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

export const formatValue = (value: number, decimalPlaces = 2) => {
  const fixedValue = value.toFixed(decimalPlaces);

  const [intPart, decimalPartRaw] = fixedValue.toString().split('.');

  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (!decimalPartRaw) return formattedInt;

  const decimalPart = decimalPartRaw.replace(/0+$/, '');

  return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
};

export const getActiveButtonClass = (variant: BUTTON_VARIANT): string | undefined => {
  switch (variant) {
    case BUTTON_VARIANT.DEFAULT:
      return BUTTON_VARIANT_ACTIVE.DEFAULT;
    case BUTTON_VARIANT.SUCCESS:
      return BUTTON_VARIANT_ACTIVE.SUCCESS;
    default:
      return undefined;
  }
};
