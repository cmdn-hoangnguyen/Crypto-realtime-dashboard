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
      <h3 className="text-[var(--text-primary)] font-semibold uppercase h-8 flex items-center">
        {title}
      </h3>

      {data?.map((item, index) => (
        <div className="bg-[var(--bg-primary)] px-4 py-2 rounded-md" key={index}>
          {renderItem(item, index)}
        </div>
      ))}
    </Paper>
  );
};
