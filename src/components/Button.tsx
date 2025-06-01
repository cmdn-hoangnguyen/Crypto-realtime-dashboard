import clsx from 'clsx';
import type { JSX } from 'react';
import { BUTTON_VARIANT } from '../constants/enum';
import { getActiveButtonClass } from '../utils/common';

interface Props {
  label: string | JSX.Element;
  onClick: () => void;
  variant?: BUTTON_VARIANT;
  classname?: string;
  isActive?: boolean;
}

export const Button = ({
  label,
  onClick,
  classname,
  variant = BUTTON_VARIANT.DEFAULT,
  isActive = false,
}: Props) => {
  return (
    <button
      className={clsx('btn-base', isActive && getActiveButtonClass(variant), classname, variant)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
