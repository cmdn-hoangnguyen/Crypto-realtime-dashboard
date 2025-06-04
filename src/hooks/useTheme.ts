import { useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEY, THEME } from '../constants/enum';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const useTheme = () => {
  const [theme, setTheme] = useState<THEME>(THEME.DARK);

  const savedTheme = getLocalStorage<THEME>(LOCAL_STORAGE_KEY.THEME);

  useEffect(() => {
    setTheme(savedTheme ?? THEME.DARK);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.classList.remove(THEME.LIGHT, THEME.DARK);
    root.classList.add(theme);
    setLocalStorage(LOCAL_STORAGE_KEY.THEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  return { theme, toggleTheme };
};
