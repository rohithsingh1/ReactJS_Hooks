import React from 'react'
import "./ProgressBar.css"

function ProgressBar() {
    return (
        <div className='container'>
            <div className='progress' >
            </div>
            <div className='progress'>
                <div className='text progress-color width25'>25%</div>
            </div>
            <div className='progress'>
                <div className='text progress-color width50'>50%</div>
            </div>
            <div className='progress'>
                <div className='text progress-color width75'>75%</div>
            </div>
            <div className='progress'>
                <div className='text progress-color width100'>100%</div>
            </div>
        </div>
    )
}

export default ProgressBar