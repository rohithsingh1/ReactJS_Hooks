import React, {useState, useEffect} from 'react'

/**
 * @param number initialValue
 * @return Object
 */
export default function useCounter(initialValue) {
    const [count, setCount]=useState(initialValue? initialValue:0)
    const incrementHandler=() => {
        setCount(count+1)
    }
    const decrementHandler=() => {
        setCount(count-1)
    }
    const resetHandler=(value) => {
        setCount(value? value:0)
    }
    return {
        count,
        increment: incrementHandler,
        decrement: decrementHandler,
        reset: resetHandler,
        setCount
    }
}