import type { JSX } from 'react';

import clsx from 'clsx';

interface Props {
  label: string | JSX.Element;
  classname?: string;
}

export const TableTitle = ({ label, classname }: Props) => {
  return <h3 className={clsx('text-xl font-bold', classname)}>{label}</h3>;
};
