import { rest } from 'msw';

import data from './mockData.json';

let mockData = [...data];

function randomizePrice(data: any[]) {
  return data.map((coin, index) => {
    if (index < 10) {
      const change = Math.random() * 0.1 - 0.05;
      const newPrice = coin.current_price * (1 + change);
      return { ...coin, current_price: parseFloat(newPrice.toFixed(2)) };
    }
    return coin;
  });
}

export const handlers = [
  rest.get(
    'https://api.coingecko.com/api/v3/coins/markets?sparkline=true&price_change_percentage=1h,24h,7d&vs_currency=usd&order=market_cap_desc&per_page=10&page=1',
    (req, res, ctx) => {
      mockData = randomizePrice(mockData);

      return res(ctx.status(200), ctx.delay(429), ctx.json(mockData));
    }
  ),
];
