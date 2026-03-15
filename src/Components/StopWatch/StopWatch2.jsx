import React, {useRef, useState} from 'react'

const MS_IN_SECOND=1000
const SECONDS_IN_MINUTE=60
const MINUTES_IN_HOUR=60
const MS_IN_MINUTES=SECONDS_IN_MINUTE*MS_IN_SECOND
const MS_IN_HOUR=MS_IN_MINUTES*MINUTES_IN_HOUR

function formatTime(timeParams) {
    let timeInMs=timeParams
    const parts={
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    }

    if (timeInMs>=MS_IN_HOUR) {
        parts.hours=Math.floor(timeInMs/MS_IN_HOUR)
        timeInMs=timeInMs%MS_IN_HOUR
    }

    if (timeInMs>MS_IN_MINUTES) {
        parts.minutes=Math.floor(timeInMs/MS_IN_MINUTES)
        timeInMs=timeInMs%MS_IN_MINUTES
    }

    if (timeInMs>MS_IN_SECOND) {
        parts.seconds=Math.floor(timeInMs/MS_IN_SECOND)
        timeInMs=timeInMs%MS_IN_SECOND
    }

    parts.milliseconds=timeInMs
    return parts
}

function StopWatch2() {
    const [totalDuration, setTotalDuration]=useState(0) // in milliseconds
    const lastTickTiming=useRef(null)
    const [timerId, setTimerId]=useState(null)
    const isRunning=timerId!==null

    const startTimer=() => {
        lastTickTiming.current=Date.now()
        const timerId=setInterval(() => {
            const now=Date.now()
            const timePassed=now-lastTickTiming.current
            setTotalDuration((duration) => {
                return duration+timePassed
            })
            lastTickTiming.current=now
        }, 1)
        setTimerId(timerId)
    }

    const stopTimer=() => {
        clearInterval(timerId)
        setTimerId(null)
    }

    const resetTimer=() => {
        stopTimer()
        setTotalDuration(0)
    }

    const toggleTimer=() => {
        if (isRunning) {
            stopTimer()
        } else {
            startTimer()
        }
    }

    const formattedTime=formatTime(totalDuration)


    return (
        <div>
            <h2>StopWatch</h2>
            <div style={{display: "flex", gap: "12px", marginTop: "16px"}} >
                {formattedTime.hours>0&&<div>
                    <span>{formattedTime.hours}</span>
                    <span>hrs</span>
                </div>}
                {formattedTime.minutes>0&&<div>
                    <span>{formattedTime.minutes}</span>
                    <span>mins</span>
                </div>}
                <div>
                    <span>{formattedTime.seconds}</span>
                    <span>sec</span>
                </div>
                <div>
                    <span>{formattedTime.milliseconds}</span>
                    <span>ms</span>
                </div>
            </div>
            <div style={{display: "flex", gap: "20px", marginTop: "16px"}} >
                <button onClick={(e) => {
                    e.preventDefault()
                    toggleTimer()
                }} >{isRunning? 'Stop Timer':"Start Timer"}</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    resetTimer()
                }}>Reset Timer</button>
            </div>
        </div>
    )
}

export default StopWatch2