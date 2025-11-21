import React, {useState, useEffect} from 'react'
import "./styles.css"

const StarSvg=({id,
    onMouseEnter,
    onMouseLeave,
    onClick,
    isHovered,
    isFilled}) => {
    return (
        <svg
            id={id}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            className={`star-icon ${isFilled? 'star-icon-filled':''} ${isHovered? 'star-icon-hovered':''}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>
    )
}

function StarRating() {

    const [hoveredStar, setHoveredStar]=useState(null);
    const [selectedStar, setSelectedStar]=useState(null);
    const [localSelectedStar, setLocalSelectorStar]=useState(null)

    const array=Array.from({length: 6}, (_, index) => index+1);

    const handleMouseEnter=(starNumber) => {
        setHoveredStar(starNumber)
    }

    const isStarHovered=(starNumber) => {
        return hoveredStar!==null&&starNumber<=hoveredStar;
    }

    const handleMouseLeave=() => {
        setLocalSelectorStar(null)
    }

    const handleClick=(starNumber) => {
        setLocalSelectorStar(starNumber)
        setSelectedStar(starNumber)
        setHoveredStar(null)
    }

    const handleContainerMouseLeave=() => {
        setHoveredStar(null)
        setLocalSelectorStar(selectedStar)
    }

    const isStarFilled=(starNumber) => {
        return localSelectedStar!==null&&starNumber<=localSelectedStar
    }

    return (
        <div className="starContainer flex" onMouseLeave={handleContainerMouseLeave}>
            {array.map((starNumber) => {
                return <div className='flex' key={starNumber} >
                    <StarSvg id={starNumber} onClick={() => handleClick(starNumber)} onMouseLeave={() => handleMouseLeave()} onMouseEnter={() => handleMouseEnter(starNumber)} isFilled={isStarFilled(starNumber)} isHovered={isStarHovered(starNumber)} />
                </div>
            })}
        </div>
    );
}

export default StarRating