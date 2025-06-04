import { faBars, faGear, faHeart, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from './Container';
import { Button } from './Button';
import { BUTTON_VARIANT } from '../constants/enum';
import { LogoText } from './LogoText';
import { headerNavigate } from '../constants/data';
import { useTheme } from '../hooks/useTheme';
import clsx from 'clsx';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const navButtons = [
    {
      href: '/favorite/',
      icon: faHeart,
      variant: BUTTON_VARIANT.HEART,
      colorClass: 'text-[var(--color-heart)]',
    },
    {
      href: '/#',
      icon: faUser,
      variant: BUTTON_VARIANT.INFO,
      colorClass: 'text-[var(--color-info)]',
    },
    {
      href: '/#',
      icon: faGear,
      variant: BUTTON_VARIANT.ACCENT,
      colorClass: 'text-[var(--color-accent)]',
    },
  ];

  return (
    <header className="header fixed left-0 right-0 shadow-sm backdrop-blur-xl z-30">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-6">
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
            <li>
              <Button
                variant={BUTTON_VARIANT.DEFAULT}
                label={
                  <i className="px-1">
                    <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                  </i>
                }
                onClick={toggleTheme}
              />
            </li>

            {navButtons?.map((btn, index) => (
              <li key={index}>
                <a className="group text-sm" href={btn?.href}>
                  <Button
                    variant={btn?.variant}
                    label={
                      <i className={clsx(btn?.colorClass, 'group-active:text-[white] px-1')}>
                        <FontAwesomeIcon icon={btn?.icon} />
                      </i>
                    }
                    onClick={() => {}}
                  />
                </a>
              </li>
            ))}

            <li className="md:hidden">
              <a className="group text-sm " href="/#">
                <Button
                  variant={BUTTON_VARIANT.PRIMARY}
                  label={
                    <i className="text-[var(--color-primary)] group-active:text-[white] px-1">
                      <FontAwesomeIcon icon={faBars} />
                    </i>
                  }
                  onClick={() => {}}
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
