import React, {useEffect, useState} from 'react'
import "./GridLights.css"

function GridLights() {
    const gridLayoutBoxes=3
    const [gridBoxes, setGridBoxes]=useState([])
    const [trackGridBoxesList, setTrackGridBoxesList]=useState([])
    const [isFilled, setIsFilled]=useState(false)

    useEffect(() => {
        const gridBoxes=Array.from({length: Math.pow(gridLayoutBoxes, 2)}, (_, idx) => {
            return {
                index: idx+1,
                isSelected: false
            }
        })
        setGridBoxes(gridBoxes)
    }, [])

    useEffect(() => {
        if (isFilled) {
            const timeout=setTimeout(() => {
                const tempTrackGridBoxesList=[...trackGridBoxesList]
                const popedElement=tempTrackGridBoxesList.pop()
                setTrackGridBoxesList(tempTrackGridBoxesList)
                if (popedElement) {
                    const tempArray=[...gridBoxes]
                    tempArray[popedElement-1]={
                        ...tempArray[popedElement-1],
                        isSelected: false
                    }
                    setGridBoxes(tempArray)
                }
            }, 500)

            return () => {
                if (trackGridBoxesList.length===0) {
                    clearTimeout(timeout)
                    setIsFilled(false)
                }
            }
        }
    }, [trackGridBoxesList, gridBoxes])

    const gridBoxClickHandler=(box) => {
        if (!box.isSelected) {
            const tempGridBoxes=gridBoxes.map((ele) => {
                if (ele.index===box.index) {
                    return {
                        ...ele,
                        isSelected: true
                    }
                } else {
                    return ele
                }
            })
            setGridBoxes(tempGridBoxes)
            const tempArray=[...trackGridBoxesList, box.index]
            setTrackGridBoxesList(tempArray)
            if (tempArray.length===Math.pow(gridLayoutBoxes, 2)) {
                setIsFilled(true)
            }
        }
    }

    return (
        <div>
            <h2>GridLights</h2>
            <div style={{gridTemplateColumns: `repeat(${gridLayoutBoxes},0fr)`}} className='container'>
                {gridBoxes.map((box) => {
                    return <div onClick={() => gridBoxClickHandler(box)} key={box.index} className={`gridBox ${box.isSelected? "selectedBox":""}`} ></div>
                })}
            </div>
        </div>
    )
}

export default GridLights