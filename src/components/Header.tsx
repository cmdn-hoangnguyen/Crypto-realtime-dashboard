import { useState, type ChangeEventHandler } from 'react';

import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Button } from './Button';
import Container from './Container';
import { LogoText } from './LogoText';
import { ModalDisplayContent } from './ModalDisplayContent';
import { ResponsiveModalContent } from './ResponsiveModalContent';
import { ResponsiveNavButtons } from './ResponsiveNavButtons';
import { headerNavigate } from '../constants/data';
import { BUTTON_LABEL, BUTTON_VARIANT, CURRENCY, PATHNAME } from '../constants/enum';
import useDebounce from '../hooks/useDebounce';
import useSearchCoin from '../hooks/useSearchCoin';

const Header = () => {
  const [currency] = useState(CURRENCY.USD);
  const [isOpenModalSearch, setIsOpenModalSearch] = useState<boolean>(false);
  const [isOpenResponsiveNav, setIsOpenResponsiveNav] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const debouncedInput = useDebounce({ value: inputValue });

  const pathname = location.pathname;
  const isActiveHeart = pathname === `/${PATHNAME.FAVORITE}`;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    setInputValue(event.target.value);
  };

  const { rawCoin, rawCoinLoading } = useSearchCoin({
    input: debouncedInput,
    currency: currency,
    currentPage: 1,
    totalItems: 10,
    isGetAll: false,
  });

  return (
    <header className="header fixed left-0 right-0 shadow-sm backdrop-blur-xl z-30">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <LogoText isHeader />

            <ul className="gap-4 md:flex hidden">
              {headerNavigate?.map((item, index) => (
                <li
                  className="font-semibold text-[var(--text-primary)] hover:text-[var(--color-primary)]"
                  key={index}
                >
                  <a href={item?.href}>{item?.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex items-center gap-2">
            <ResponsiveNavButtons classname="md:block hidden" isActiveHeart={isActiveHeart} />

            <li className="md:hidden relative">
              <Button
                variant={BUTTON_VARIANT.PRIMARY}
                label={
                  <i
                    className={clsx(
                      'group-active:text-[white] px-1',
                      isOpenResponsiveNav ? 'text-white' : 'text-[var(--color-primary)]'
                    )}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </i>
                }
                onClick={() => {
                  setIsOpenResponsiveNav(prev => !prev);
                  setIsOpenModalSearch(false);
                }}
                isActive={isOpenResponsiveNav}
                ariaLabel={BUTTON_LABEL.HEADER_ITEM_LIST}
              />

              {isOpenResponsiveNav && (
                <ModalDisplayContent classname="right-0">
                  <ResponsiveModalContent
                    inputValue={inputValue}
                    handleInputChange={handleInputChange}
                    debouncedInput={debouncedInput}
                    rawCoin={rawCoin}
                    rawCoinLoading={rawCoinLoading}
                    isActiveHeart={isActiveHeart}
                  />
                </ModalDisplayContent>
              )}
            </li>

            <li className="hidden md:block relative">
              <Button
                variant={BUTTON_VARIANT.INFO}
                label={
                  <i
                    className={clsx(
                      'px-1 group-active:text-[white]',
                      isOpenModalSearch ? 'text-white' : 'text-[var(--color-info)]'
                    )}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                }
                onClick={() => {
                  setIsOpenModalSearch(!isOpenModalSearch);
                  setIsOpenResponsiveNav(false);
                }}
                isActive={isOpenModalSearch}
                ariaLabel={BUTTON_LABEL.SEARCH}
              />

              {isOpenModalSearch && (
                <ModalDisplayContent classname="right-0">
                  <ResponsiveModalContent
                    inputValue={inputValue}
                    handleInputChange={handleInputChange}
                    debouncedInput={debouncedInput}
                    rawCoin={rawCoin}
                    rawCoinLoading={rawCoinLoading}
                    isActiveHeart={isActiveHeart}
                  />
                </ModalDisplayContent>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
