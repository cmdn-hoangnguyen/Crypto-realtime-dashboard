import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const savedTheme = getLocalStorage<'light' | 'dark'>('theme');

  useEffect(() => {
    setTheme(savedTheme ?? 'dark');
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    setLocalStorage('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
