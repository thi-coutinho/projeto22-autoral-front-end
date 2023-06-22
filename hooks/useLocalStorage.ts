import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>

export default function useLocalStorage<T>(key: string, initialValue: T): [T,SetValue<T>] {
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValue
    }
  }, [initialValue, key])


  const [storedValue, setStoredValue] = useState(readValue)

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
