import React, {useState, useRef} from "react";

const MS_IN_SECOND=1000
const SECONDS_IN_MINUTE=60
const MINUTES_IN_HOUR=60
const MS_IN_HOUR=MINUTES_IN_HOUR*SECONDS_IN_MINUTE*MS_IN_SECOND
const MS_IN_MINUTES=SECONDS_IN_MINUTE*MS_IN_SECOND

// It converts milliseconds into readable time parts
const formatTime=(timeParams) => {
    let time=timeParams
    const parts={
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliSeconds: 0
    }

    if (time>=MS_IN_HOUR) {
        parts.hours=Math.floor(time/MS_IN_HOUR)
        time=time%MS_IN_HOUR
    }

    if (time>MS_IN_MINUTES) {
        parts.minutes=Math.floor(time/MS_IN_MINUTES)
        time=time%MS_IN_MINUTES
    }

    if (time>MS_IN_SECOND) {
        parts.seconds=Math.floor(time/MS_IN_SECOND)
        time=time%MS_IN_SECOND
    }

    parts.milliSeconds=time

    return parts
}

function StopWatch() {
    const [totalDuration, setTotalDuration]=useState(0)
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
            <div style={{display: "flex", gap: 8}} >
                {formattedTime.hours>0&&<span>
                    <span className="time-number">
                        {formattedTime.hours}
                    </span>
                    <span className="time-unit">h</span>
                </span>}
                {formattedTime.minutes>0&&<span>
                    <span className="time-number">
                        {formattedTime.minutes}
                    </span>
                    <span className="time-unit">m</span>
                </span>}
                <span>
                    <span className="time-number">
                        {formattedTime.seconds}
                    </span>
                    <span className="time-unit">s</span>
                </span>
                <span>
                    <span className="time-number">
                        {formattedTime.milliSeconds}
                    </span>
                    <span className="time-unit">ms</span>
                </span>
            </div>
            <div style={{display: "flex", marginTop: 12, gap: 12}} >
                <button
                    onClick={() => {
                        toggleTimer();
                    }}>
                    {isRunning? 'Stop':'Start'}
                </button>{' '}
                <button
                    onClick={() => {
                        resetTimer();
                    }}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default StopWatch