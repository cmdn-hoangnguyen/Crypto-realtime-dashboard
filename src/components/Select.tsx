import { useRef, useEffect } from 'react';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

export interface Option<T> {
  label: string;
  value: T;
}

interface Props<T> {
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  className?: string;
}

export function CustomSelect<T>({
  value,
  options,
  onChange,
  className,
  isOpen,
  setIsOpen,
}: Props<T>) {
  const selectRef = useRef<HTMLDivElement>(null);

  const selected = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  const handleOptionClick = (optionValue: T) => {
    onChange(optionValue);
    setTimeout(() => setIsOpen(false), 0);
  };

  return (
    <div className={clsx('relative w-full text-sm z-20', className)} ref={selectRef}>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-nowrap justify-center rounded-md"
      >
        <span className="text-center sm:text-sm text-[10px] uppercase">{selected?.label}</span>
        <i className="sm:ml-1 text-[10px]">
          <FontAwesomeIcon icon={faAngleDown} />
        </i>
      </span>

      {isOpen && (
        <ul className="absolute top-full right-[-8px] z-10 mt-4 w-fit min-w-20 rounded-md bg-[var(--bg-gray-light)] shadow-md overflow-hidden border">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                handleOptionClick(option.value);
              }}
              className={clsx(
                'text-[var(--text-primary)] cursor-pointer px-2 py-2 uppercase hover:bg-[var(--bg-muted)]',
                option.value === value && 'bg-[var(--bg-muted)]'
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
