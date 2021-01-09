import { useEffect, useRef } from "react";

// Used to get previous state
const usePrevious = value => {
  const prevChildrenRef = useRef();

  useEffect(() => {
    prevChildrenRef.current = value;
  }, [value]);

  return prevChildrenRef.current;
};

export default usePrevious;
