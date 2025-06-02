import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from './Container';
import { Button } from './Button';
import { BUTTON_VARIANT } from '../constants/enum';
import { LogoText } from './LogoText';

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between">
          <LogoText isHeader />

          <div className="flex items-center gap-4">
            <a className="group text-sm" href="/favorite/">
              <Button
                variant={BUTTON_VARIANT.HEART}
                label={
                  <i className="text-[var(--color-heart)] group-active:text-[white] px-1">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                }
                onClick={() => {}}
              />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
