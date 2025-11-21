import React, {useRef} from 'react'
import InputBox from './InputBox'

function ForwardRefExample() {
    const inputRef=useRef(null)
    const onClickHandler=() => {
        const name=inputRef.current.value
        console.log('name>>>>>>>', name);
        inputRef.current.value=''
    }
    return (
        <div>
            <div>ForwardRefExample</div>
            <InputBox ref={inputRef} />
            <button onClick={onClickHandler}  >Focus the Input</button>
        </div>
    )
}

export default ForwardRefExample