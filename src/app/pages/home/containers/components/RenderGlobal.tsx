// components/RenderGlobalData.tsx
import React from 'react';
import { formatHugeNumber, getCurrency } from '../../../../../utils/common';
import { Paper } from '../../../../../components/Paper';
import type { CURRENCY } from '../../../../../constants/enum';

interface RenderGlobalDataProps {
  title: string;
  value: number;
  currency: CURRENCY;
  subtitle: string;
  imgUrl: string;
  alt: string;
}

const RenderGlobalData: React.FC<RenderGlobalDataProps> = ({
  title,
  value,
  currency,
  subtitle,
  imgUrl,
  alt,
}) => {
  return (
    <Paper className="flex flex-col">
      <h3 className="text-[var(--text-primary)] font-semibold uppercase h-6 mb-2 flex items-center">
        {title}
      </h3>

      <div className="flex justify-between items-center bg-[var(--bg-primary)] px-4 py-2 rounded-md">
        <div className="flex flex-col">
          <p className="text-[var(--text-primary)] text-xl font-bold">
            {getCurrency(currency)}
            {formatHugeNumber(value)}
          </p>

          <p className="text-[var(--text-secondary)] text-sm">{subtitle}</p>
        </div>

        <div className="w-40 max-w-[40%]">
          <img src={imgUrl} alt={alt ?? title} />
        </div>
      </div>
    </Paper>
  );
};

export default RenderGlobalData;
