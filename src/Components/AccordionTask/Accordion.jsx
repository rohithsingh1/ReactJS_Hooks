import React, {useState, useRef, useEffect} from "react";
import './Accordion.css'


const Data=[
    {
        id: 0,
        title: 'HTML',
        description: `The HyperText Markup Language or HTML is the
                    standard markup language for documents designed to
                    be displayed in a web browser.`,
        isOpen: false,
    },
    {
        id: 1,
        title: 'CSS',
        description: `Cascading Style Sheets is a style sheet language
                    used for describing the presentation of a document
                    written in a markup language such as HTML or XML.`,
        isOpen: false,
    },
    {
        id: 2,
        title: 'JavaScript',
        description: `JavaScript, often abbreviated as JS, is a
                    programming language that is one of the core
                    technologies of the World Wide Web, alongside HTML
                    and CSS.`,
        isOpen: false,
    }
]




export default function Accordion() {
    const [accordionState, setAccordionState]=useState(Data)
    const [focusIndex, setFocusIndex]=useState(-1)
    const accordionRefs=useRef([])

    const accordionClickHandler=(item) => {
        const newAccordionState=accordionState.map((ele) => {
            if (ele.id===item.id) {
                return {
                    ...ele,
                    isOpen: !ele.isOpen
                }
            } else {
                return {...ele, isOpen: false}
            }
        })
        setAccordionState(newAccordionState)
    }

    const accessibleByArrows=(e, index) => {
        const {key}=e
        if (key==='ArrowDown') {
            e.preventDefault()
            const nextIndex=index+1
            if (nextIndex<accordionState.length) {
                setFocusIndex(nextIndex)
            }
        }
        else if (key==="ArrowUp") {
            e.preventDefault()
            const prevIndex=index-1
            if (prevIndex>=0) {
                setFocusIndex(prevIndex)
            }
        }
    }

    useEffect(() => {
        if (accordionRefs.current[focusIndex]) {
            accordionRefs.current[focusIndex].focus()
        }
    }, [focusIndex])

    return (
        <div className="accordion-container">{accordionState.map((item, index) => {
            return <div key={item.id} >
                <button
                    ref={(el) => accordionRefs.current[index]=el}
                    className="flex accordionButtonOverride"
                    onClick={() => {accordionClickHandler(item)}}
                    onKeyDown={(e) => accessibleByArrows(e, index)}
                >
                    <div>{item.title}</div>
                    <div className={`accordion-icon ${item.isOpen? "accordion-icon--rotated ":""}`}></div>
                </button>
                {item.isOpen&&<div className={`accordion-description ${item.isOpen? 'open':''}`}>{item.description}</div>}
            </div>
        })}</div>
    )
}
