import { useRef, useEffect } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
    <div className={clsx('relative w-12 text-sm z-20', className)} ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-center uppercase rounded-md"
      >
        {selected?.label}
        <i className="ml-1">
          <FontAwesomeIcon icon={faAngleDown} />
        </i>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-4 w-full rounded-md bg-white shadow-md overflow-hidden border">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                handleOptionClick(option.value);
              }}
              className={clsx(
                'cursor-pointer px-2 py-2 uppercase hover:bg-indigo-100',
                option.value === value && 'bg-indigo-100'
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
