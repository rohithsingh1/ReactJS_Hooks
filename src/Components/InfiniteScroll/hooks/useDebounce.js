import React, {useRef} from "react";
const useDebounce=(cb, delay) => {
    let timeout=useRef(null);
    return () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        timeout.current=setTimeout(() => {
            cb();
        }, delay);
    };
};

export default useDebounce;
