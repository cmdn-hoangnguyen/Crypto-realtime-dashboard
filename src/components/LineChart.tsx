import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { getColorByValue } from '../utils/common';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

interface Props {
  prices: number[];
  weekChangeData: number;
  width?: number;
  height?: number;
}

const LineChart = ({ prices, weekChangeData, width = 200, height = 50 }: Props) => {
  const chartData = {
    labels: new Array(prices.length).fill(''),
    datasets: [
      {
        data: prices,
        borderColor: getColorByValue(weekChangeData),
        borderWidth: 1.5,
        fill: false,
        pointRadius: 0,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <Line key={prices.length} data={chartData} options={options} width={width} height={height} />
  );
};

export default LineChart;
