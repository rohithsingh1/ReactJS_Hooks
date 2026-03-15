import React, {useState, useEffect} from 'react'
import "./Progressbar4.css"
import Progressbar from './Progressbar'

function Progressbar4() {

    const [progressBars, setProgressBars]=useState(0)
    const [completedAnimation, setCompletedAnimation]=useState(0)
    return (
        <div style={{width: "90%"}}>
            <h2>TempProgressbar4</h2>
            <button onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setProgressBars((prev) => prev+1)
            }}>Add ProgressBar</button>
            {
                Array.from({length: progressBars}, (_, index) => index).map((ele) => {
                    return <Progressbar key={ele} shouldStart={ele<=completedAnimation} onCompleteAnimationHandler={() => {
                        setCompletedAnimation((prev) => prev+1)
                    }} />
                })
            }
        </div>
    )
}

export default Progressbar4