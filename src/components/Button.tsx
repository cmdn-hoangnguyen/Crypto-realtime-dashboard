import type { JSX } from 'react';

import clsx from 'clsx';

import { BUTTON_VARIANT } from '../constants/enum';

interface Props {
  label: string | JSX.Element;
  onClick: () => void;
  ariaLabel: string;
  variant?: BUTTON_VARIANT;
  classname?: string;
  isActive?: boolean;
}

export const Button = ({
  label,
  onClick,
  ariaLabel,
  classname,
  variant = BUTTON_VARIANT.DEFAULT,
  isActive = false,
}: Props) => {
  return (
    <button
      className={clsx('btn-base min-w-10 group', isActive && 'btn-base-active', classname, variant)}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
};
