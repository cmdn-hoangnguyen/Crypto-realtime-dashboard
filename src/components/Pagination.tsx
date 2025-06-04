import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

interface Props {
  dataLength: number;
  currentPage: number;
  itemsPerPage: number;
  onPaginationClick: (page: number) => void;
  classname?: string;
}

const Pagination = ({
  dataLength,
  currentPage,
  itemsPerPage,
  onPaginationClick,
  classname,
}: Props) => {
  const lastPage = Math.ceil(dataLength / itemsPerPage);

  const getPageList = (): (number | '...')[] => {
    const pages: (number | '...')[] = [];

    if (lastPage <= 5) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }

      return pages;
    }

    if (currentPage < 3) {
      pages.push(1, 2, 3, '...', lastPage);
    } else if (currentPage > lastPage - 2) {
      pages.push(1, '...', lastPage - 2, lastPage - 1, lastPage);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', lastPage);
    }

    return pages;
  };

  const pagesArray = getPageList();

  const handleNextPage = () => {
    currentPage !== lastPage && onPaginationClick(currentPage + 1);
  };

  const handlePrevPage = () => {
    currentPage !== 1 && onPaginationClick(currentPage - 1);
  };

  return (
    <ul className={clsx(classname, 'flex flex-wrap gap-2 items-center m-auto w-fit')}>
      <li>
        <Button
          label={
            <i>
              <FontAwesomeIcon icon={faChevronLeft} />
            </i>
          }
          onClick={handlePrevPage}
          isActive={currentPage === 1}
        />
      </li>

      {pagesArray.map((page, index) => (
        <li
          className={clsx(
            ((page !== lastPage && (page === currentPage + 1 || page === currentPage + 2)) ||
              (page !== 1 && (page === currentPage - 1 || page === currentPage - 2))) &&
              'sm:block hidden'
          )}
          key={index}
        >
          {page === '...' ? (
            <span className="text-[var(--text-primary)]">...</span>
          ) : (
            <Button
              label={page.toString()}
              onClick={() => onPaginationClick(page)}
              isActive={page === currentPage}
            />
          )}
        </li>
      ))}

      <li>
        <Button
          label={
            <i>
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          }
          onClick={handleNextPage}
          isActive={currentPage === lastPage}
        />
      </li>
    </ul>
  );
};

export default Pagination;
