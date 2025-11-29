import React, {useRef, useState} from 'react'
import useDebounce from './useDebounce'
import "./AutoSearchComplete.css"
const baseUrl='https://dragonball-api.com/api/characters'

function AutoSearchComplete() {
    // const [inputField, setInputField]=useState('')
    const chipInputRef=useRef(null)
    const [chipsList, setChipList]=useState([])

    // const searchAPIHandler=async (value) => {
    //     const apiResponse=await fetch(`${baseUrl}?name=${value}`)
    //     const apiResponseData=await apiResponse.json()
    //     console.log("apiResponseData>>>>>>>>", apiResponseData);
    // }
    // const debouncedFunction=useDebounce(searchAPIHandler, 900)

    // const inputSearchFieldHandler=async (e) => {
    //     try {
    //         e.preventDefault()
    //         const value=e.target.value
    //         setInputField(value)
    //         debouncedFunction(value)
    //     } catch (error) {
    //         console.log("error>>>>>>>>", error);
    //     }
    // }

    const addChipsHandler=() => {
        const chipValue=chipInputRef.current.value
        const isFound=chipsList.find((chip) => {
            return chip.toLowerCase()===chipValue.toLowerCase()
        })
        if (!isFound) {
            const chipList=[...chipsList, chipValue]
            setChipList(chipList)
        }
        chipInputRef.current.value=''
    }

    const removeChipHandler=(chipRemove) => {
        const chipList=chipsList.filter((chip) => {
            return chip!==chipRemove
        })
        setChipList(chipList)
    }
    return (
        <div>
            <h2>AutoSearchComplete</h2>
            <div>
                <input ref={chipInputRef} className='inputContainer' placeholder='enter the chip title...' />
                <button className='mLeft-16' onClick={addChipsHandler}>Add chips</button>
            </div>
            <div className='mTop-12 flex gap-12'>
                {chipsList.map((chip) => {
                    return <div key={chip} className='chipContainer' >
                        <div>{chip}</div>
                        <img className='iconContainer' onClick={() => removeChipHandler(chip)} src='src/Components/AutoSearchComplete/close.png' />
                    </div>
                })}
            </div>
            {/* <input value={inputField} onChange={(e) => inputSearchFieldHandler(e)} placeholder='Search any thing here...' /> */}
        </div>
    )
}

export default AutoSearchComplete