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

    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', lastPage);
    } else if (currentPage >= lastPage - 2) {
      pages.push(1, '...', lastPage - 3, lastPage - 2, lastPage - 1, lastPage);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', lastPage);
    }

    return pages;
  };

  const pagesArray = getPageList();

  const paginateButtonStyle = 'cursor-pointer p-2';

  const handleNextPage = () => {
    currentPage !== lastPage && onPaginationClick(currentPage + 1);
  };

  const handlePrevPage = () => {
    currentPage !== 1 && onPaginationClick(currentPage - 1);
  };

  return (
    <ul className={clsx(classname, 'flex gap-2 items-center m-auto w-fit')}>
      <li className={paginateButtonStyle} onClick={handlePrevPage}>
        <i>
          <FontAwesomeIcon icon={faChevronLeft} />
        </i>
      </li>

      {pagesArray.map((page, index) => (
        <li key={index}>
          {page === '...' ? (
            '...'
          ) : (
            <Button
              classname="w-12"
              label={page.toString()}
              onClick={() => onPaginationClick(page)}
              isActive={page === currentPage}
            />
          )}
        </li>
      ))}

      <li className={paginateButtonStyle} onClick={handleNextPage}>
        <i>
          <FontAwesomeIcon icon={faChevronRight} />
        </i>
      </li>
    </ul>
  );
};

export default Pagination;
