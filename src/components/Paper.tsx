import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Paper = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        'p-4 rounded-xl border border-solid shadow-sm',
        'bg-[var(--bg-secondary)] border-[var(--bg-muted)]',
        className
      )}
    >
      {children}
    </div>
  );
};
