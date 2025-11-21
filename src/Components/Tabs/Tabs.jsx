import React, {useEffect, useState} from 'react'
import './styles.css'

const tabsData={
    tabs: [
        {
            id: 1,
            title: 'HTML',
            defaultSelected: true
        },
        {
            id: 2,
            title: 'CSS',
            defaultSelected: false
        },
        {
            id: 3,
            title: 'JavaScript',
            defaultSelected: false
        }
    ],
    tabContent: {
        1: {
            text: `The HyperText Markup Language or HTML is the
                    standard markup language for documents designed to
                    be displayed in a web browser.`,
        },
        2: {
            text: `Cascading Style Sheets is a style sheet language
                    used for describing the presentation of a document
                    written in a markup language such as HTML or XML.`,
        },
        3: {
            text: `JavaScript, often abbreviated as JS, is a
                    programming language that is one of the core
                    technologies of the World Wide Web, alongside HTML
                    and CSS.`,
        }
    }
}

function Tabs() {
    const [tabId, setTabId]=useState(null)

    useEffect(() => {
        if (tabsData.tabs?.length>0) {
            tabsData.tabs.forEach((ele) => {
                const {id, defaultSelected}=ele||{}
                if (defaultSelected) {
                    setTabId(id)
                }
            })
        }
    }, [tabsData])
    return <div>
        {tabsData.tabs.map((ele) => {
            const {id, title}=ele||{}
            return <div key={id}>
                <button onClick={() => {setTabId(id)}}>{title}</button>
            </div>
        })}
        {tabsData.tabContent?.[tabId]&&<div>{tabsData.tabContent?.[tabId]?.text}</div>}
    </div>
}

export default Tabs