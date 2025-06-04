import type { ReactNode } from 'react';

import clsx from 'clsx';

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Paper = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        'md:p-4 p-2 rounded-xl border border-solid shadow-sm',
        'bg-[var(--bg-secondary)] border-[var(--bg-muted)]',
        className
      )}
    >
      {children}
    </div>
  );
};
