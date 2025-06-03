import { CURRENCY } from '../../../../../constants/enum';
import { Line } from 'react-chartjs-2';
import { formatHugeNumber, formatValue, getCurrency, hexToRGBA } from '../../../../../utils/common';
import type { ChartOptions } from 'chart.js';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface history {
  timestamp: number;
  time: string;
  price: number;
}

interface Props {
  priceHistory: history[];
  currency: CURRENCY;
  color: string;
}

const DetailChart = ({ priceHistory, currency, color }: Props) => {
  const backgroundColor = hexToRGBA(color, 0.1);

  const chartData = {
    labels: priceHistory?.map(item => item.time),
    datasets: [
      {
        label: 'Price',
        data: priceHistory?.map(item => item.price),
        borderColor: color,
        backgroundColor: backgroundColor,
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context: any) {
            const value = context.parsed.y;
            return `Price: $${formatValue(value)}`;
          },
        },
      },
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxRotation: 0,
          minRotation: 45,
          maxTicksLimit: 10,
          callback: function (value, index) {
            if (index === 0) return '';
            return this.getLabelForValue(value as number);
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        position: 'right',
        ticks: {
          callback: function (tickValue: string | number) {
            const value = typeof tickValue === 'number' ? tickValue : parseFloat(tickValue);
            return `${getCurrency(currency)}${formatHugeNumber(value)}`;
          },
        },
        grid: {
          color: '#eee',
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default DetailChart;
