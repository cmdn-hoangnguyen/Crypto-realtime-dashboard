// components/RenderGlobalData.tsx
import React from 'react';

import { Paper } from '../../../../../components/Paper';
import type { CURRENCY } from '../../../../../constants/enum';
import { formatCurrencyDisplay, formatHugeNumber } from '../../../../../utils/common';

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
      <h3 className="text-[var(--text-primary)] font-semibold uppercase mb-1 flex items-center lg:justify-start justify-center">
        {title}
      </h3>

      <div className="flex justify-between items-center bg-[var(--bg-primary)] px-4 py-3 rounded-md">
        <div className="flex flex-col">
          <p className="text-[var(--text-primary)] text-xl font-bold">
            {formatCurrencyDisplay(formatHugeNumber(value), currency)}
          </p>

          <p className="text-[var(--text-secondary)] sm:text-sm text-[10px]">{subtitle}</p>
        </div>

        <div className="w-40 max-w-[40%]">
          <img src={imgUrl} alt={alt ?? title} />
        </div>
      </div>
    </Paper>
  );
};

export default RenderGlobalData;
