import React, {useState, useMemo} from 'react'
import "./ProgressBar2.css"

function ProgressBar2() {
    const [addProgressBar, setAddProgressBar]=useState(0)

    return (
        <div>
            <button onClick={() => setAddProgressBar((prev) => prev+1)} >Add</button>
            <div className='container'>
                {Array.from({length: addProgressBar}, (_, index) => index+1).map((ele) => {
                    return <div key={ele}>
                        <div className='progress'>
                            <div className='progress-color'></div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProgressBar2