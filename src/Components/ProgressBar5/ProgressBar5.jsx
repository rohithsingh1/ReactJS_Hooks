import React, {useState} from 'react'
import "./ProgressBar5.css"

const CONCURRENCY_LIMIT=3

function ProgressBar({onAnimationEndHandler, isAnimating}) {
    return (
        <div style={{marginTop: 12, marginBottom: 12}}>
            <div className='progressBarOuterContainer'>
                <div onAnimationEnd={onAnimationEndHandler} className={isAnimating? 'progressBarInnerContainer':""}></div>
            </div>
        </div>
    )
}

function ProgressBar5() {
    const [countProgressBar, setCountProgressBar]=useState(0)
    const [completedProgressBar, setCompletedProgressBar]=useState(0)
    return (
        <div>
            <button onClick={(e) => {
                e.preventDefault()
                setCountProgressBar((prev) => prev+1)
            }} >Add</button>
            <div style={{marginTop: 12}} >
                {Array.from({length: countProgressBar}, (_, index) => index).map((ele) => {
                    return <div key={ele} >
                        <ProgressBar isAnimating={ele<(completedProgressBar+CONCURRENCY_LIMIT)} onAnimationEndHandler={() => {
                            setCompletedProgressBar((prev) => prev+1)
                        }} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProgressBar5