import React, {useState, useEffect} from 'react'

/**
 * @param boolean initialValue
 * @return Object
 */
export default function useBoolean(initialValue) {
    const [isBoolean, setIsBoolean]=useState(initialValue)
    const setTrue=() => {
        setIsBoolean(true)
    }
    const setFalse=() => {
        setIsBoolean(false)
    }
    return {
        value: isBoolean,
        setTrue,
        setFalse
    }
}