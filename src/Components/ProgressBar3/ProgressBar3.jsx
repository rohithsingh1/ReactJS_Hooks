import React, {useState, useEffect, useRef} from 'react'
import './styles.css'


const ProgressBar=({isEmpty, onCompleted}) => {

    const [shouldStartAnimation, setShouldStartAnimation]=useState(false)

    useEffect(() => {
        if (isEmpty||shouldStartAnimation) {
            return
        }
        setShouldStartAnimation(true)
    }, [isEmpty])

    return (
        <div className='progress'>
            <div onTransitionEnd={() => {
                onCompleted()
            }} className={[
                'bar-contents',
                shouldStartAnimation&&'bar-contents--filled',
            ]
                .filter(Boolean)
                .join(' ')}  ></div>
        </div>
    )
}

function ProgressBar3() {
    const [addProgressBar, setAddProgressBar]=useState(0)
    const [addProgressBarToAnimate, setAddProgressBarToAnimate]=useState(0)

    return (
        <div>
            <button onClick={() => setAddProgressBar(addProgressBar+1)} >Add</button>
            <div className='container'>
                {Array.from({length: addProgressBar}, (_, index) => index).map((ele) => {
                    return <ProgressBar key={ele} isEmpty={ele>addProgressBarToAnimate} onCompleted={() => {
                        setAddProgressBarToAnimate(addProgressBarToAnimate+1)
                    }} />
                })}
            </div>
        </div>
    )
}

export default ProgressBar3