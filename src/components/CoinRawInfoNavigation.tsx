import clsx from 'clsx';

import RoundedItem from './RoundedItem';
import { PATHNAME } from '../constants/enum';
import type { CoinMarket, RawCoin } from '../constants/type';

interface Props {
  coin: RawCoin | CoinMarket;
  size: number;
  isRoundedIcon?: boolean;
  classname?: string;
  isLarger?: boolean;
}

export const CoinRawInfoNavigation = ({
  coin,
  size,
  classname,
  isRoundedIcon = false,
  isLarger = false,
}: Props) => {
  const coinLogo = () => {
    const imageSrc = 'thumb' in coin ? coin.thumb : coin.image;

    return (
      <img src={imageSrc} alt={coin?.name} style={{ width: `${size}px`, height: `${size}px` }} />
    );
  };

  return (
    <a className={clsx(classname, 'flex justify-between')} href={`/${PATHNAME.DETAIL}/${coin?.id}`}>
      <div className="flex items-center gap-2">
        {isRoundedIcon ? <RoundedItem content={coinLogo()} /> : coinLogo()}

        <div className={clsx(isLarger ? 'w-60' : 'w-40', 'flex flex-col max-w-[50%]')}>
          <span className="text-[var(--text-primary)] font-semibold w-full max-w-[40vw] truncate">
            {coin?.name}
          </span>
          <span className="text-[var(--text-secondary)] sm:text-sm text-[12px] uppercase">
            {coin?.symbol}
            <span className="ml-1">#{coin?.market_cap_rank}</span>
          </span>
        </div>
      </div>
    </a>
  );
};
