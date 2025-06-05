import type { ChangeEventHandler } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { SpinLoader } from './SpinLoader';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  classname?: string;
  isLoading?: boolean;
}

const SearchInput = ({ value, onChange, placeholder, classname, isLoading }: Props) => {
  return (
    <form
      className={clsx(
        'form-layout flex text-[var(--color-muted)] bg-[var(--bg-secondary)] p-2 rounded-md',
        classname
      )}
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <i className="text-sm w-6">
        {isLoading ? <SpinLoader size="16px" /> : <FontAwesomeIcon icon={faSearch} />}
      </i>

      <input
        className="w-full text-sm bg-transparent outline-none"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchInput;
