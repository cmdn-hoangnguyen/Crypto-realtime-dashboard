export const getLocalStorage = <T>(key: string): T | null => {
  try {
    const data = localStorage.getItem(key);
    if (!data) return null;

    return JSON.parse(data) as T;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
