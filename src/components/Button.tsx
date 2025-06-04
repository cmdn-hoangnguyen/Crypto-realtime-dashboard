import clsx from 'clsx';
import type { JSX } from 'react';
import { BUTTON_VARIANT } from '../constants/enum';

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
      className={clsx('btn-base min-w-10 group', isActive && 'btn-base-active', classname, variant)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
