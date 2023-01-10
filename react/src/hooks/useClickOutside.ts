import React, { useEffect, useRef } from "react";

//Will fire callback function when element with passed ref is click outside of
export const useClickOutside = (
  elRef: React.RefObject<HTMLDivElement>,
  callback: (e: MouseEvent) => void
) => {
  const callbackRef = useRef<(e: MouseEvent) => void>();
  callbackRef.current = callback;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!elRef?.current?.contains(e.target as Node) && callbackRef.current) {
        callbackRef.current(e);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [elRef]);
};
