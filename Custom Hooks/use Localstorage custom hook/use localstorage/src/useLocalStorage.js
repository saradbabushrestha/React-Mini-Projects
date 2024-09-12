import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue === null) {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    } else {
      try {
        return JSON.parse(localValue);
      } catch (error) {
        console.error(
          `Error parsing localStorage value for key "${key}":`,
          error
        );
        return typeof initialValue === "function"
          ? initialValue()
          : initialValue;
      }
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
