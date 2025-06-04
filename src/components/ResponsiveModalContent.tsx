import { type ChangeEventHandler } from 'react';
import SearchInput from './SearchInput';
import { CoinRawInfoNavigation } from './CoinRawInfoNavigation';
import { SpinLoader } from './SpinLoader';
import { ResponsiveNavButtons } from './ResponsiveNavButtons';
import type { RawCoin } from '../constants/type';

type Props = {
  inputValue: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  debouncedInput: string;
  rawCoin: RawCoin[];
  rawCoinLoading: boolean;
  isActiveHeart: boolean;
};

export const ResponsiveModalContent = ({
  inputValue,
  handleInputChange,
  debouncedInput,
  rawCoin,
  rawCoinLoading,
  isActiveHeart,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 w-[320px] max-w-[80vw]">
      <ul className="md:hidden flex justify-between mb-2">
        <ResponsiveNavButtons isActiveHeart={isActiveHeart} />
      </ul>

      <SearchInput
        classname="mb-2"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search coin..."
        isLoading={rawCoinLoading}
      />

      {!!debouncedInput?.length ? (
        <ul className="flex flex-col gap-1 max-h-[75vh] overflow-y-auto overflow-x-hidden">
          {!!rawCoin?.length ? (
            rawCoin.map((coin: RawCoin) => (
              <li key={coin.id} className="p-2 bg-[var(--bg-muted)] rounded-md">
                <CoinRawInfoNavigation coin={coin} size={32} />
              </li>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <SpinLoader size="80" />
            </div>
          )}
        </ul>
      ) : (
        <p className="text-center text-[var(--text-primary)]">Search something</p>
      )}
    </div>
  );
};
