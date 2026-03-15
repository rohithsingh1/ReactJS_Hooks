import React, {useState, useEffect, useRef, useMemo} from 'react'

const SECONDS_IN_MINUTES=60
const SECONDS_IN_HOURS=60*60
const SECONDS_IN_DAY=24*60*60

const formatTime=(timeSeconds) => {
    const days=Math.floor(timeSeconds/SECONDS_IN_DAY)
    const remainderAfterDays=timeSeconds%SECONDS_IN_DAY
    const hours=Math.floor(remainderAfterDays/SECONDS_IN_HOURS)
    const remainderAfterHours=remainderAfterDays%SECONDS_IN_HOURS
    const minutes=Math.floor(remainderAfterHours/SECONDS_IN_MINUTES)
    const seconds=remainderAfterHours%SECONDS_IN_MINUTES

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

function Timer1() {
    const [formFields, setFormFields]=useState({
        days: 0,
        hours: 0,
        minutes: 0
    })
    const [totalSeconds, setTotalSeconds]=useState(0)
    const [isSubmitted, setIsSubmitted]=useState(false)
    const [isRunning, setIsRunning]=useState(false)
    const intervalRef=useRef(null)

    const clearTimerInterval=() => {
        if (intervalRef.current!==null) {
            clearInterval(intervalRef.current)
            intervalRef.current=null
        }
    }

    const submitHandler=(e) => {
        e.preventDefault()
        const {days, hours, minutes}=formFields
        const totalSeconds=(days*SECONDS_IN_DAY)+(hours*SECONDS_IN_HOURS)+(minutes*SECONDS_IN_MINUTES)
        setTotalSeconds(totalSeconds)
        setIsSubmitted(true)
        setIsRunning(true)
    }

    const stopStopTimerHandler=() => {
        setIsRunning((prev) => !prev)
    }

    const resethandler=() => {
        clearTimerInterval()
        setIsRunning(false)
        setTotalSeconds(0)
        setIsSubmitted(false)
    }

    useEffect(() => {
        if (totalSeconds<=0||!isRunning) {
            clearTimerInterval()
            return
        }

        intervalRef.current=setInterval(() => {
            setTotalSeconds((prev) => {
                if (prev<=1) {
                    clearTimerInterval()
                    setIsRunning(false)
                    return 0
                }
                return prev-1
            })
        }, 500)

        return () => {
            clearTimerInterval()
        }
    }, [totalSeconds, isRunning])

    const formatedTime=useMemo(() => formatTime(totalSeconds), [totalSeconds])

    return (
        <div>
            <h2>Timer1</h2>
            <div>
                {!isSubmitted? <form>
                    <div>
                        <label htmlFor='days' >Days</label>
                        <input id='days' type="number" min={0} value={formFields.days} onChange={(e) => {
                            setFormFields((prev) => {
                                return {
                                    ...prev,
                                    days: e.target.value
                                }
                            })
                        }} />
                    </div>
                    <div>
                        <label htmlFor='hours' >Hours</label>
                        <input id='hours' type="number" min={0} value={formFields.hours} onChange={(e) => {
                            setFormFields((prev) => {
                                return {
                                    ...prev,
                                    hours: e.target.value
                                }
                            })
                        }} />
                    </div>
                    <div>
                        <label htmlFor='minutes' >Minutes</label>
                        <input id='minutes' type="number" min={0} value={formFields.minutes} onChange={(e) => {
                            setFormFields((prev) => {
                                return {
                                    ...prev,
                                    minutes: e.target.value
                                }
                            })
                        }} />
                    </div>
                    <button onClick={submitHandler} >Submit</button>
                </form>:
                    <div>
                        <div>{String(formatedTime.days).padStart(2, '0')} days</div>
                        <div>{String(formatedTime.hours).padStart(2, '0')} Hours</div>
                        <div>{String(formatedTime.minutes).padStart(2, '0')} Minutes</div>
                        <div>{String(formatedTime.seconds).padStart(2, '0')} Seconds</div>

                        <div>
                            <button onClick={stopStopTimerHandler} disabled={totalSeconds<=0} >{isRunning? "Stop":"Start"}</button>
                            <button onClick={resethandler}>Reset</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Timer1