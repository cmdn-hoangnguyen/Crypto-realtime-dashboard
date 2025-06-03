import type { ReactNode } from 'react';
import { Paper } from '../../../../../components/Paper';

interface Props<T> {
  title: string;
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

export const RenderInfoValue = <T,>({ data, renderItem, title }: Props<T>) => {
  return (
    <Paper className="flex flex-col gap-2">
      <h3 className="font-semibold uppercase mb-2">{title}</h3>

      {data?.map((item, index) => (
        <div className="bg-[var(--bg-primary)] p-4 rounded-md" key={index}>
          {renderItem(item, index)}
        </div>
      ))}
    </Paper>
  );
};
