import { faHeart, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Button } from './Button';
import { Paper } from './Paper';
import { BUTTON_LABEL, BUTTON_VARIANT, PATHNAME, THEME } from '../constants/enum';
import { useTheme } from '../hooks/useTheme';

interface Prop {
  isActiveHeart: boolean;
  classname?: string;
}

export const ResponsiveNavButtons = ({ isActiveHeart, classname }: Prop) => {
  const { theme, toggleTheme } = useTheme();

  const customPaperClass =
    'md:hidden block font-semibold text-[var(--text-secondary)] text-sm border-none';

  const listContentClass =
    'flex items-center justify-between bg-[var(--paper-bg)] py-2 px-1 rounded-md';

  return (
    <>
      <li className={clsx(classname)}>
        <div className={listContentClass}>
          <Paper className={customPaperClass}>
            <span className="capitalize">{theme} mode</span>
          </Paper>

          <Button
            classname="w-fit"
            variant={BUTTON_VARIANT.DEFAULT}
            label={
              <i className="px-1">
                <FontAwesomeIcon icon={theme === THEME.DARK ? faSun : faMoon} />
              </i>
            }
            onClick={toggleTheme}
            ariaLabel={BUTTON_LABEL.TOGGLE_THEME}
          />
        </div>
      </li>

      <li className={clsx(classname)}>
        <a className="group text-sm" href={`/${PATHNAME.FAVORITE}`}>
          <div className={listContentClass}>
            <Paper className={customPaperClass}>
              <span className="capitalize">Favorite</span>
            </Paper>

            <Button
              variant={BUTTON_VARIANT.HEART}
              label={
                <i
                  className={clsx(
                    'px-1 group-active:text-[white]',
                    isActiveHeart ? 'text-white' : 'text-[var(--color-heart)]'
                  )}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              }
              onClick={() => {}}
              isActive={isActiveHeart}
              ariaLabel={BUTTON_LABEL.FAVORITE_NAVIGATION}
            />
          </div>
        </a>
      </li>
    </>
  );
};
