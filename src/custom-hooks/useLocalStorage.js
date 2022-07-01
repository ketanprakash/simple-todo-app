import { useEffect, useState } from "react"

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  return initialValue;
}

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value]);
  return [value, setValue];
}

export default useLocalStorage;