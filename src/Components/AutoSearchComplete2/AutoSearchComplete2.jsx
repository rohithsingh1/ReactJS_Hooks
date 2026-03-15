import React, {useState, useEffect, useRef} from 'react'
import {mockAPIHandler, useDebounce} from "./utils"
import {useThrottle} from "./useThrottle"
import "./AutoSearchComplete2.css"

function AutoSearchComplete2() {
    const [searchQuery, setSearchQuery]=useState('')
    const [suggestionsList, setSuggestionsList]=useState([])
    const boxRef=useRef(null);
    const [pagination, setPagination]=useState({
        startIndex: 0,
        endIndex: 10
    })

    // Call the hook at the top level
    const debouncedFunction=useDebounce(mockAPIHandler, 800)

    const suggestionListHandler=async ({value='', isEmpty=false, startIndex=0, endIndex=10, append=false}) => {
        try {
            const response=await debouncedFunction(value, startIndex, endIndex)
            if (isEmpty) {
                setSuggestionsList([])
                setPagination({startIndex: 0, endIndex: 10})
            } else if (response&&Array.isArray(response)) {
                if (append) {
                    // Append new results for pagination, avoiding duplicates
                    setSuggestionsList(prev => {
                        const existingIds=new Set(prev.map(item => item.id))
                        const newItems=response.filter(item => !existingIds.has(item.id))
                        return [...prev, ...newItems]
                    })
                } else {
                    // Replace results for new search
                    setSuggestionsList(response)
                }
                setPagination({
                    startIndex: endIndex,
                    endIndex: endIndex+endIndex
                })
                if (response?.length===0) {
                    if (boxRef.current?.style) {
                        boxRef.current.style.display="none"
                    }
                } else {
                    if (boxRef.current?.style) {
                        boxRef.current.style.display="block"
                    }
                }
            }
        } catch (error) {
            console.error("Error fetching suggestions:", error)
        }
    }

    const inputSearchHandler=async (event) => {
        const {value}=event.target||{}
        if (value?.length>0) {
            setSearchQuery(value)
            setPagination({startIndex: 0, endIndex: 10}) // Reset pagination for new search
            await suggestionListHandler({value: value, startIndex: 0, endIndex: 10})
        } else {
            setSearchQuery('')
            await suggestionListHandler({value: value, isEmpty: true})
        }
    }

    useEffect(() => {
        // Only set up observer if we have suggestions

        const observer=new IntersectionObserver(async ([entry]) => {
            if (entry.isIntersecting&&searchQuery) {
                console.log('Loading more results...');
                const response=await throttleFunction(searchQuery, pagination.startIndex, pagination.endIndex)
                if (response&&Array.isArray(response)) {
                    setSuggestionsList(prev => {
                        const existingIds=new Set(prev.map(item => item.id))
                        const newItems=response.filter(item => !existingIds.has(item.id))
                        return [...prev, ...newItems]
                    })
                    setPagination({
                        startIndex: pagination.endIndex,
                        endIndex: pagination.endIndex+pagination.endIndex
                    })
                    if (response?.length===0) {
                        if (boxRef.current?.style) {
                            boxRef.current.style.display="none"
                        }
                    } else {
                        if (boxRef.current?.style) {
                            boxRef.current.style.display="block"
                        }
                    }
                }
            }
        }, {
            threshold: 0.1 // Reduce threshold to trigger earlier
        })

        console.log('boxRef.current>>>>>>', boxRef.current);

        if (boxRef.current) {
            console.log("boxRef.current exists, observing!");
            observer.observe(boxRef.current)
        }

        return () => {
            if (boxRef.current) {
                console.log("cleanup observer");
                observer.unobserve(boxRef.current)
            }
        }

    }, [suggestionsList.length])

    const throttleFunction=useThrottle(mockAPIHandler, 5000)

    return (
        <div>
            <h2>AutoSearchComplete</h2>
            <div className='inputContainer'>
                <input className='inputField' type='text' name='searchSuggestion' value={searchQuery} onChange={(e) => inputSearchHandler(e)} />
            </div>
            <div id='suggestionsList'>
                <div className={`${suggestionsList.length>0? 'suggestionsListContainer':''}`}>
                    {suggestionsList.map((suggestion, index) => {
                        const {id, name}=suggestion||{}
                        return <div className='suggestions' key={`${id}-${index}`} >{name}</div>
                    })}
                    <div
                        ref={boxRef}
                        style={{
                            height: '20px',
                            backgroundColor: 'lightblue',
                            border: '1px solid blue',
                            margin: '10px 0',
                            textAlign: 'center',
                            fontSize: '12px'
                        }}
                    >
                        Load More...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutoSearchComplete2