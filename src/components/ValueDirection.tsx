import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getColorByValue } from '../utils/common';
import clsx from 'clsx';

interface Props {
  value: number;
  classname?: string;
}

const ValueDirection = ({ value, classname }: Props) => {
  const color = getColorByValue(value);
  const formatValue = Math.abs(value).toFixed(2);

  return (
    <div className={clsx(classname, 'flex justify-end gap-1')} style={{ color: color }}>
      <i>{<FontAwesomeIcon icon={value > 0 ? faCaretUp : faCaretDown} />}</i>
      <span>{formatValue}%</span>
    </div>
  );
};

export default ValueDirection;
