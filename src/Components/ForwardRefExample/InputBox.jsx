import React from 'react'

function InputBox(props, ref) {
    return (
        <>
            <label>Enter your Name</label>
            <input placeholder='Enter your name' ref={ref} />
        </>
    )
}

export default React.forwardRef(InputBox)