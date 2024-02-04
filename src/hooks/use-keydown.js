import React from "react";

const useKeydown = (key, callback) => {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      return window.removeEventListener("keydown", handleEscape);
    };
  }, [callback, key]);
};

export default useKeydown;
