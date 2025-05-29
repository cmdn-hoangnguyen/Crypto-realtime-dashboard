import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from './Container';
import RoundedItem from './RoundedItem';

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between">
          <a href="/">
            <div className="flex items-center">
              <RoundedItem
                content={
                  <div className="max-w-10 max-h-10">
                    <img src="/logo.ico" alt="Crypto" />
                  </div>
                }
              />

              <h1 className="text-xl font-bold tracking-tight">Legit Crypto</h1>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <a className="text-sm" href="/favorite/#">
              <div className="flex items-center gap-1">
                <i className="text-[var(--color-error)]">
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <span className="font-semibold">Favorite</span>
              </div>
            </a>

            <form className="text-[var(--color-muted)] bg-[var(--bg-secondary)] p-2 rounded-md">
              <i className="text-sm mr-1">
                <FontAwesomeIcon icon={faSearch} />
              </i>

              <input
                className="text-sm bg-transparent outline-none"
                type="text"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
