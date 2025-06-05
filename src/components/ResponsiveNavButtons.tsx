import { faHeart, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Button } from './Button';
import { Paper } from './Paper';
import { BUTTON_VARIANT, PATHNAME, THEME } from '../constants/enum';
import { useTheme } from '../hooks/useTheme';

interface Prop {
  isActiveHeart: boolean;
  classname?: string;
}

export const ResponsiveNavButtons = ({ isActiveHeart, classname }: Prop) => {
  const { theme, toggleTheme } = useTheme();

  const customPaperClass =
    'md:hidden block font-semibold text-[var(--text-secondary)] text-sm bg-[var(--paper-bg)] py-[9px] rounded';

  return (
    <>
      <li className={clsx(classname)}>
        <div className="flex items-center justify-center gap-2">
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
          />
        </div>
      </li>

      <li className={clsx(classname)}>
        <a className="group text-sm" href={`/${PATHNAME.FAVORITE}`}>
          <div className="flex items-center justify-center gap-2">
            <Paper className={customPaperClass}>
              <span className="capitalize">Favorite list</span>
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
            />
          </div>
        </a>
      </li>
    </>
  );
};
