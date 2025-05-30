import type { JSX } from 'react';

import clsx from 'clsx';

interface Props {
  content: JSX.Element;
  isBordered?: boolean;
  classname?: string;
}

const RoundedItem = ({ content, classname = '', isBordered = false }: Props) => {
  const classes = clsx('rounded-full p-1', classname, isBordered && 'border');

  return <span className={classes}>{content}</span>;
};

export default RoundedItem;
