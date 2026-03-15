import React, {useRef, useCallback} from 'react'

// export const useThrottle=(callback, delay) => {
//     const lastCallRef=useRef(0)

//     return useCallback((...args) => {
//         const now=Date.now()

//         if ((now-lastCallRef.current)>=delay) {
//             lastCallRef.current=now
//             callback(...args)
//         }
//     }, [callback, delay])
// }

export const useThrottle=(callback, delay) => {
    const timeoutRef=useRef(null)
    const lastCallFunRef=useRef(Date.now())

    return useCallback((...args) => {
        if (timeoutRef.current) {
            return
        }

        const remaining=delay-(Date.now()-lastCallFunRef.current)

        console.log("remaining>>>>>", remaining);


        if (remaining<=0) {
            callback(...args)
            lastCallFunRef.current=Date.now()
        } else {
            timeoutRef.current=setTimeout(() => {
                callback(...args)
                lastCallFunRef.current=Date.now()
                timeoutRef.current=null
            }, remaining)
        }
    }, [callback, delay])
}