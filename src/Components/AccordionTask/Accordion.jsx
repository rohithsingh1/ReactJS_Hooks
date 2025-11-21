import React, {useState} from "react";
import './Accordion.css'


const Data=[
    {
        title: 'HTML',
        description: `The HyperText Markup Language or HTML is the
                    standard markup language for documents designed to
                    be displayed in a web browser.`
    },
    {
        title: 'CSS',
        description: `Cascading Style Sheets is a style sheet language
                    used for describing the presentation of a document
                    written in a markup language such as HTML or XML.`
    },
    {
        title: 'JavaScript',
        description: `JavaScript, often abbreviated as JS, is a
                    programming language that is one of the core
                    technologies of the World Wide Web, alongside HTML
                    and CSS.`
    }
]

const defaultStateAccordion=() => {
    const obj={}
    Data.forEach((ele) => {
        const {title}=ele
        obj[title]=false
    })
    return obj
}


export default function Accordion() {
    const [accordionState, setAccordionState]=useState(defaultStateAccordion())
    const toggleAccordionHandler=(title) => {
        const value=accordionState[title]
        const defaultState={...defaultStateAccordion(), [title]: !value}
        setAccordionState(defaultState)
    }
    return (
        <div className="accordion-container">
            {Data.map((ele) => {
                const {title, description}=ele
                return (
                    <div onClick={() => toggleAccordionHandler(title)} key={title} >
                        <div>
                            {title}
                            <span
                                aria-hidden={true}
                                className={`accordion-icon ${accordionState[title]? 'accordion-icon--rotated':''}`}
                            />
                        </div>
                        {accordionState[title]? (
                            <div className="accordion-description open">
                                {description}
                            </div>
                        ):(
                            <div className="accordion-description">
                                {description}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
