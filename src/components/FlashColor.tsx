import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import type { CURRENCY } from '../constants/enum';
import { formatCurrencyDisplay, formatValue } from '../utils/common';

interface Props {
  price: number;
  currency: CURRENCY;
  classname?: string;
}

export const FlashColor = ({ price, classname, currency }: Props) => {
  const [flashColor, setFlashColor] = useState<string | null>(null);
  const prevPrice = useRef<number>(price);

  useEffect(() => {
    if (price > prevPrice.current) {
      setFlashColor('#22c55e');
    } else if (price < prevPrice.current) {
      setFlashColor('#dc2626');
    }
    prevPrice.current = price;
  }, [price]);

  useEffect(() => {
    if (!flashColor) return;

    const timeout = setTimeout(() => {
      setFlashColor(null);
    }, 1400);

    return () => clearTimeout(timeout);
  }, [flashColor]);

  return (
    <p
      className={clsx(classname, flashColor !== null && 'font-semibold', 'duration-150')}
      style={{ color: flashColor ?? 'inherit' }}
    >
      {formatCurrencyDisplay(formatValue(price) ?? '', currency)}
    </p>
  );
};
