import { Dispatch, SetStateAction, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>

export default function useLocalStorage<T>(key: string, initialValue: T): [T,SetValue<T>] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | Function) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
