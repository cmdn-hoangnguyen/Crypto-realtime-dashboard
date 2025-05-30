import { useState } from 'react';

import clsx from 'clsx';

import Container from '../../../../components/Container';
import RenderTableCell from '../../../../components/RenderTableCell';
import { coinMarketTable } from '../../../../constants/data';
import { CURRENCY } from '../../../../constants/enum';
import useGetCoinMarket from '../../../../hooks/useGetCoinMarket';

const Home = () => {
  const [currency] = useState(CURRENCY.USD);
  const [itemsPerPage] = useState(30);
  const [currentPage] = useState(1);

  const { coins, coinsLoading } = useGetCoinMarket({
    currency: currency,
    totalItems: itemsPerPage,
    currentPage: currentPage,
  });

  if (coinsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main-home">
      <Container>
        <div className="flex flex-col gap-1">
          <div className="table-actions flex gap-2"></div>

          <table className="table w-full">
            <thead className="table-head">
              <tr className="table-head-item">
                {coinMarketTable?.map(cell => (
                  <th className={clsx('text-sm font-semibold p-2', cell.className)} key={cell?.id}>
                    {cell?.headerLabel}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="table-body">
              {coins?.map(coin => (
                <tr className="table-body-item" key={coin?.id}>
                  {coinMarketTable?.map((cell, cellIndex) => (
                    <td
                      className={clsx('table-body-item text-sm p-2', cell.className)}
                      key={cell?.id}
                    >
                      <RenderTableCell data={coin} colIndex={cellIndex} currency={currency} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </main>
  );
};

export default Home;
