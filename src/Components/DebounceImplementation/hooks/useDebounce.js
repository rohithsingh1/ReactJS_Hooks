import React, {useRef} from 'react'

function useDebounce(cb, delay) {
    let timer=useRef(null);

    return function (...args) {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current=setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

export default useDebounce