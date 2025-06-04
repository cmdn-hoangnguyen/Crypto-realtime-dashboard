import clsx from 'clsx';
import type { ReactNode } from 'react';

export const ModalDisplayContent = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={clsx(classname, 'absolute top-full p-4 mt-2 rounded-md bg-[var(--bg-gray-light)]')}
    >
      {children}
    </div>
  );
};
