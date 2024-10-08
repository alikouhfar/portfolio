"use client";

const useLocalStorage = () => {
  function setItem(title: string, value: string) {
    window.localStorage.setItem(title, value);
  }

  function getItem(title: string) {
    const storedValue = window.localStorage.getItem(title);
    return storedValue;
  }

  return { setItem, getItem };
};

export default useLocalStorage;
