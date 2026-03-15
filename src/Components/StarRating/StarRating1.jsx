import React, {useState} from "react";
import "./styles1.css"


const StarIcon=({id, isFilled, isHovered, onClick, onMouseEnter}) => {
    return (
        <svg
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            id={id}
            xmlns="http://www.w3.org/2000/svg"
            className={`star-icon ${isHovered? "star-icon-hovered":""} ${isFilled? "star-icon-filled":""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>
    )
}

export default function StarRating({noOfStars=5}) {
    const [selectedIndex, setSelectedIndex]=useState(-1)
    const [hoveredIndex, setHoveredIndex]=useState(-1)
    const [localSelectedIndex, setLocalSelectedInddex]=useState(-1)

    const onSelectStarHandler=(index) => {
        setSelectedIndex(index)
        setLocalSelectedInddex(index)
        setHoveredIndex(-1)
    }

    const onHoverStarHandler=(index) => {
        setHoveredIndex(index)
        setLocalSelectedInddex(-1)
    }

    const onMouseLeaveContainerHandler=() => {
        setLocalSelectedInddex(selectedIndex)
        setHoveredIndex(-1)
    }


    return (
        <div onMouseLeave={() => onMouseLeaveContainerHandler()} style={{display: "flex"}}>
            {Array.from({length: noOfStars}, (_, index) => index).map((ele) => {
                return <StarIcon key={ele} id={ele}
                    isFilled={localSelectedIndex!==-1&&ele<=localSelectedIndex}
                    onClick={() => onSelectStarHandler(ele)}
                    isHovered={hoveredIndex!==-1&&ele<=hoveredIndex}
                    onMouseEnter={() => onHoverStarHandler(ele)}
                />
            })}
        </div>
    );
}
