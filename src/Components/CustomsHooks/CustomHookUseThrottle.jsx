import React, {useState, useEffect} from 'react'
import {useThrottle} from './useThrottle'

function CustomHookUseThrottle() {
    const [width, setWidth]=useState(window.innerWidth)

    const throtledResizeHandler=useThrottle(() => {
        setWidth(window.innerWidth)
    }, 1000)

    useEffect(() => {
        window.addEventListener("resize", throtledResizeHandler)

        return () => {
            window.removeEventListener("resize", throtledResizeHandler)
        }
    }, [])
    return (
        <div>
            <h2>Use Throttle</h2>
            <p>width - {width}px</p>
        </div>
    )
}

export default CustomHookUseThrottle