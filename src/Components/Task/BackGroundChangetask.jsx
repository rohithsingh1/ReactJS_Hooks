import React, {useState, useRef, useEffect} from 'react'
import './Task.css'

function Task() {
    const [backgroundColor, setBackGroundColor]=useState({
        red: 0,
        blue: 0,
        green: 0
    })
    const timerRef=useRef(null)

    useEffect(() => {

        timerRef.current=setInterval(() => {
            setBackGroundColor((prev) => {
                if (prev.red>=255) {
                    clearInterval(timerRef.current)
                    timerRef.current=null
                    return prev
                }
                return {
                    red: prev.red+1,
                    blue: prev.blue+1,
                    green: prev.green+1
                }
            })
        }, 50)

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        }

    }, [])
    return (
        <div>
            <div className='boxContainer'>
                <div style={{backgroundColor: `rgb(${backgroundColor.red},${backgroundColor.green},${backgroundColor.blue})`}} className='box'></div>
            </div>
        </div>
    )
}

export default Task
