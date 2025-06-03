import clsx from 'clsx';
import type { JSX } from 'react';

interface Props {
  label: string | JSX.Element;
  classname?: string;
}

export const TableTitle = ({ label, classname }: Props) => {
  return <h3 className={clsx('text-xl font-bold', classname)}>{label}</h3>;
};
