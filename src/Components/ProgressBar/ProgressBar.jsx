import React from 'react'
import "./ProgressBar.css"

function ProgressBar() {
    return (
        <div className='container'>
            <div className='progress'>
                <div style={{width: "25%"}} className='progress-color text' >25%</div>
            </div>
            <div className='progress'>
                <div style={{width: "50%"}} className='progress-color text' >50%</div>
            </div>
            <div className='progress'>
                <div style={{width: "75%"}} className='progress-color text' >75%</div>
            </div>
            <div className='progress'>
                <div style={{width: "100%"}} className='progress-color text' >100%</div>
            </div>

        </div>
    )
}

export default ProgressBar