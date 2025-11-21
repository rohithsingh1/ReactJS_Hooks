import React, {useLayoutEffect, useRef, useState} from "react";

export default function UseLayoutEffectExample() {
    const boxRef=useRef(null)
    const [width, setWidth]=useState(0)

    useLayoutEffect(() => {
        if (boxRef.current) {
            setWidth(boxRef.current.getBoundingClientRect().width)
        }
    }, [])
    return (
        <div>
            <h2>useLayoutEffect Example</h2>
            <div ref={boxRef} style={{width: "50%", padding: "20px"}} >Box Element</div>
            <h3>Measured width: {width}px</h3>
        </div>
    )
}
