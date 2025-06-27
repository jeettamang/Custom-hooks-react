import React, { useEffect, useState } from "react";

const useDebounce = (searchValue, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const searchDelay = setTimeout(() => {
      setDebounceValue(searchValue);
    }, delay);

    return () => clearTimeout(searchDelay);
  }, [searchValue, delay]);

  return debounceValue;
};

export default useDebounce;
