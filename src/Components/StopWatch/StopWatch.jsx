import React, {useState, useRef, useEffect} from 'react'

function StopWatch() {
    const [timerDetails, setTimerDetails]=useState({hours: 0, minutes: 0, seconds: 0})
    const timerIntervalRef=useRef(null)
    const [disabledButtons, setDisabledButtons]=useState(false)

    useEffect(() => {
        return () => {
            clearInterval(timerIntervalRef.current)
        }
    }, [])

    const timerDetailsHandler=() => {
        setDisabledButtons(!disabledButtons)
        timerIntervalRef.current=setInterval(() => {
            setTimerDetails((prev) => {
                if (prev.seconds>=59) {
                    if (prev.minutes>=59) {
                        return {
                            seconds: 0,
                            minutes: 0,
                            hours: prev.hours+1
                        }
                    }
                    else {
                        return {
                            ...prev,
                            seconds: 0,
                            minutes: prev.minutes+1,
                        }
                    }
                } else {
                    return {
                        ...prev,
                        seconds: prev.seconds+1
                    }
                }
            })
        }, 100)
    }

    const stopOrResetTimerHandler=(reset) => {
        if (reset) {
            setTimerDetails({hours: 0, minutes: 0, seconds: 0})
            setDisabledButtons(false)
        } else {
            setDisabledButtons(!disabledButtons)
        }
        clearInterval(timerIntervalRef.current)
    }
    return (
        <div>
            <div>hours--{timerDetails.hours}, minutes--{timerDetails.minutes}, seconds-- {timerDetails.seconds} </div>
            <div>
                <button disabled={disabledButtons} onClick={() => timerDetailsHandler()}  >Start</button>
                <button disabled={!disabledButtons} onClick={() => {
                    stopOrResetTimerHandler()
                }} style={{marginLeft: "8px", marginRight: "8px"}}>Stop</button>
                <button onClick={() => {
                    stopOrResetTimerHandler(true)
                }} >Reset</button>
            </div>
        </div>
    )
}

export default StopWatch