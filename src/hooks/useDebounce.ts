import { useEffect, useState } from 'react';

interface Props<T> {
  value: T;
  delay?: number;
}

const useDebounce = <T>({ value, delay = 300 }: Props<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handleDebounce = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handleDebounce);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
