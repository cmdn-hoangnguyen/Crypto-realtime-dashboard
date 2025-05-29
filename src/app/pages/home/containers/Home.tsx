import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from '../../../../components/Container';
import useGetCoinMarket from '../../../../hooks/useGetCoinMarket';
import useGetCoinMarketHistory from '../../../../hooks/useGetCoinMarketHistory';

const Home = () => {
  const { coins, loading } = useGetCoinMarket({
    totalItems: 10,
    currentPage: 1,
  });

  const { history } = useGetCoinMarketHistory({ coinId: 'bitcoin' });

  console.log(history);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <main>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Fav</th>
              <th>Coin</th>
              <th>Price</th>
              <th>24H %</th>
              <th>24H volume</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>

          <tbody>
            {coins?.map(data => (
              <tr key={data?.id}>
                <td>
                  <button>
                    <FontAwesomeIcon icon={farHeart} />
                  </button>
                </td>
                <td>
                  <div className="flex">
                    <div className="max-w-12">
                      <img src={data?.image} alt={data?.name} />
                    </div>

                    <div className="flex flex-col">
                      <span>{data?.name}</span>
                      <span className="uppercase">{data?.symbol}</span>
                    </div>
                  </div>
                </td>
                <td>{data.current_price}</td>
                <td>{data?.price_change_percentage_24h}</td>
                <td>{data?.total_volume}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </main>
  );
};

export default Home;
