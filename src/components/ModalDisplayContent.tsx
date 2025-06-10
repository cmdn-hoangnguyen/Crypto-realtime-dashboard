import type { ReactNode } from 'react';

import clsx from 'clsx';

export const ModalDisplayContent = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={clsx(
        classname,
        'modal absolute top-full mt-2 rounded-md bg-[var(--bg-gray-light)]'
      )}
    >
      {children}
    </div>
  );
};
