import ValueDirection from '../../../../../components/ValueDirection';

interface Props<T> {
  data: T;
  getIcon?: (item: T) => string;
  getName: (item: T) => string;
  getValue: (item: T) => string;
  getChange: (item: T) => number;
}

export const InfoValueItem = <T,>({ data, getIcon, getName, getValue, getChange }: Props<T>) => {
  return (
    <div className="flex justify-between items-end">
      <div className="flex items-end gap-2">
        {getIcon && (
          <div className="max-w-6 max-h-6 rounded-full overflow-hidden">
            <img src={getIcon(data)} alt={getName(data)} />
          </div>
        )}
        <span>{getName(data)}</span>
      </div>

      <div className="flex">
        <span className="font-semibold">{getValue(data)}</span>
        <span className="w-20">
          <ValueDirection value={getChange(data)} />
        </span>
      </div>
    </div>
  );
};
