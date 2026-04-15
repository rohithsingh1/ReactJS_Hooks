import React, {useState, useRef, useMemo, useEffect} from 'react'
import "./OtpInputBox.css"
const INPUT_FEILDS=6

function OtpInputBox() {

    const initialValue=useMemo(() => {
        const emptyInputFeilds=Array.from({length: INPUT_FEILDS}, (_, index) => '')
        return emptyInputFeilds
    }, [])
    const [otpInputTextFeild, setOtpInputTextFeild]=useState(initialValue)
    const [keyboardInput, setKeyboardInput]=useState(null)

    // console.log('otpInputTextFeild>>>>>>', otpInputTextFeild);


    const otpInputRef=useRef([])

    const otpInputTextFeildHandler=(value, index) => {
        // debugger
        console.log("inisde the otpInputTextFeildHandler>>>>>");
        setOtpInputTextFeild((a) => [
            ...a.slice(0, index),
            value,
            ...a.slice(index+1, a.length)
        ])
        if (keyboardInput&&keyboardInput==='Backspace') {
            otpInputRef.current[index-1]?.focus()
        } else {
            otpInputRef.current[index+1]?.focus()
        }
        setKeyboardInput(null)
    }

    useEffect(() => {
        otpInputRef.current[0]?.focus()
    }, [])

    const keyboardHandler=(event, index) => {
        const {code}=event
        event.stopPropagation()
        if (code==='Backspace') {
            console.log("inisde the keyboardHandler>>>>>");
            setKeyboardInput(code)
        }

    }



    return (
        <div>
            <h1>OtpInputBox</h1>
            <div className='OtpContainer' >
                {Array.from({length: INPUT_FEILDS}, (_, index) => index).map((ele) => {
                    return <div key={ele} className='inputContainer'>
                        <input name={`otpInput_${ele}`} ref={(el) => {
                            otpInputRef.current[ele]=el
                        }} onKeyDown={(e) => keyboardHandler(e, ele)} value={otpInputTextFeild[ele]} onChange={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            otpInputTextFeildHandler(e.target.value, ele)
                        }} type="number" className='inputTag' />
                    </div>
                })}
            </div>
        </div>
    )
}

export default OtpInputBox
