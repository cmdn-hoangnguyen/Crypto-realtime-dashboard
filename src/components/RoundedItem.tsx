import type { JSX } from 'react';

import clsx from 'clsx';

interface Props {
  content: JSX.Element;
  isBordered?: boolean;
  classname?: string;
}

const RoundedItem = ({ content, classname = '', isBordered = false }: Props) => {
  const classes = clsx(
    'rounded-full flex justify-center items-center',
    classname,
    isBordered && 'border'
  );

  return <span className={classes}>{content}</span>;
};

export default RoundedItem;
