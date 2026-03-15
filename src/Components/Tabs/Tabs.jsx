import React, {useEffect, useState, useRef} from 'react'
import './styles.css'

const tabsData={
    tabs: [
        {
            id: 1,
            title: 'HTML',
            defaultSelected: true,
            text: `The HyperText Markup Language or HTML is the
                    standard markup language for documents designed to
                    be displayed in a web browser.`,
        },
        {
            id: 2,
            title: 'CSS',
            defaultSelected: false,
            text: `Cascading Style Sheets is a style sheet language
                    used for describing the presentation of a document
                    written in a markup language such as HTML or XML.`,
        },
        {
            id: 3,
            title: 'JavaScript',
            defaultSelected: false,
            text: `JavaScript, often abbreviated as JS, is a
                    programming language that is one of the core
                    technologies of the World Wide Web, alongside HTML
                    and CSS.`,
        }
    ]
}

function Tabs() {
    const [selectedTab, setSelectedTab]=useState({})
    const [focusIndex, setFocusIndex]=useState(0)
    const accordionRefs=useRef([])

    useEffect(() => {
        const selectedTab=tabsData.tabs.find((ele) => {
            return ele.defaultSelected===true
        })
        if (selectedTab) {
            setSelectedTab(selectedTab)
        }
    }, [])

    const tabClickHandler=(tab) => {
        const selectedTab=tabsData.tabs.find((ele) => {
            return ele.id===tab.id
        })
        setSelectedTab(selectedTab)
    }

    useEffect(() => {
        if (accordionRefs.current[focusIndex]) {
            accordionRefs.current[focusIndex].focus()
        }
    }, [focusIndex])

    const accessibleByArrows=(e, index) => {
        const {key}=e
        console.log("keys>>>>>", key);
        if (key==='ArrowRight') {
            e.preventDefault()
            const nextIndex=index+1
            if (nextIndex<tabsData.tabs.length) {
                setFocusIndex(nextIndex)
            }
        }
        else if (key==="ArrowLeft") {
            e.preventDefault()
            const prevIndex=index-1
            if (prevIndex>=0) {
                setFocusIndex(prevIndex)
            }
        }
    }

    return <React.Fragment>
        <div className='tabsContainer'>
            {tabsData.tabs.map((tab, index) => {
                return <button
                    tabIndex={focusIndex===index? 0:-1}
                    ref={(el) => accordionRefs.current[index]=el}
                    onKeyDown={(e) => accessibleByArrows(e, index)}
                    onClick={() => {tabClickHandler(tab)}}
                    key={index}
                    className={`tab ${selectedTab.id===tab.id? "selectedTab":""} `}>
                    {tab.title}
                </button>
            })}
        </div>
        <div className='marginTop12'>
            {selectedTab?.text}
        </div>
    </React.Fragment>
}

export default Tabs