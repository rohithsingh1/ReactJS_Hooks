import React, {useEffect, useState} from 'react'
import "./Progressbar4.css"

const Progressbar=({shouldStart, onCompleteAnimationHandler}) => {
    return <div style={{backgroundColor: "grey", height: "20px", marginTop: "12px", borderRadius: "8px"}} >
        <div onAnimationEnd={onCompleteAnimationHandler} className={`${shouldStart? "progressBarTransition":""}`} ></div>
    </div>
}

export default Progressbar