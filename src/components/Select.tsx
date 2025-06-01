import { useRef, useEffect } from 'react';
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

export function CustomSelect<T extends string>({
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
  }, []);

  return (
    <div className={clsx('relative w-14 text-sm', className)} ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-center uppercase rounded-md"
      >
        {selected?.label}
      </button>

      {isOpen && (
        <ul className="absolute min-w-14 z-10 w-full rounded-md bg-white overflow-hidden">
          {options.map(option => (
            <li
              className={clsx(
                'cursor-pointer px-2 py-2 text-[var(--text-primary)] uppercase hover:bg-indigo-100',
                option.value === value && 'bg-indigo-100 font-medium'
              )}
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
