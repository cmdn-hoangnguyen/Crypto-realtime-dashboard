import { type ChangeEventHandler } from 'react';

import { CoinRawInfoNavigation } from './CoinRawInfoNavigation';
import { ResponsiveNavButtons } from './ResponsiveNavButtons';
import SearchInput from './SearchInput';
import { SpinLoader } from './SpinLoader';
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
    <div className="flex flex-col md:w-[400px] w-full-minus-16 md:p-4 p-2">
      <ul className="w-[360px] max-w-full grid grid-cols-12 gap-2 md:hidden justify-between ml-auto mb-2">
        <ResponsiveNavButtons classname="col-span-6" isActiveHeart={isActiveHeart} />
      </ul>

      <SearchInput
        classname="py-4"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search coin..."
        isLoading={rawCoinLoading}
        isShadowStyle={false}
      />

      {!!debouncedInput?.length && (
        <ul className="flex flex-col gap-1 max-h-[50vh] overflow-y-auto overflow-x-hidden mt-2">
          {rawCoin?.length ? (
            rawCoin.map((coin: RawCoin) => (
              <li className="p-2 bg-[var(--bg-muted)] rounded-md" key={coin.id}>
                <CoinRawInfoNavigation coin={coin} size={32} isLarger />
              </li>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <SpinLoader size="80" />
            </div>
          )}
        </ul>
      )}
    </div>
  );
};
