import React, {useState, useCallback, useRef, useEffect} from 'react'
import "./ChipsSelectorDropdown.css"
import {chipsData} from './constants'
import closeIcon from './close.png'


function ChipsSelectorDropdown() {
    const [chipInputText, setChipInputText]=useState('')
    const [selectedChipList, setSelectedChipList]=useState([])
    const [filterChipList, setFilterChipList]=useState(chipsData)
    const [openDropdownList, setOpenDropdownList]=useState(false)
    const [focusedIndex, setFocusedIndex]=useState(-1)
    const [announceMessage, setAnnounceMessage]=useState('')
    const inputRef=useRef(null)
    const optionsRef=useRef([])

    const inputFieldHandler=(e) => {
        const {value}=e.target
        setChipInputText(value)
        const filteredData=chipsData.filter((ele) => {
            const tempList=selectedChipList.find((ele1) => {
                return ele1?.id===ele.id
            })
            if (tempList) {
                return false
            } else {
                return ele.name.toLowerCase().includes(value?.toLowerCase())
            }
        })
        setFilterChipList(filteredData)
        setFocusedIndex(-1)
    }

    // const filteredDataHandler=useCallback(() => {
    //     return chipsData.filter((ele) => {
    //         const tempList=selectedChipList.find((ele1) => {
    //             return ele1?.id===ele.id
    //         })
    //         if (tempList) {
    //             return false
    //         } else {
    //             return true
    //         }
    //     })
    // }, [selectedChipList, filterChipList]
    // )
    const selectChipHandler=(data) => {
        const tempSelectedChipList=[...selectedChipList, data]
        setSelectedChipList(tempSelectedChipList)
        setChipInputText('')
        const temp1=chipsData.filter((ele) => {
            const tempList=tempSelectedChipList.find((ele1) => {
                return ele1?.id===ele.id
            })
            if (tempList) {
                return false
            } else {
                return true
            }
        })
        setFilterChipList(temp1)
        setAnnounceMessage(`${data.name} selected. ${tempSelectedChipList.length} items selected.`)
        inputRef.current?.focus()
    }

    const deleteChipHandler=(data) => {
        const tempSelectedChipList=[...selectedChipList].filter((ele) => {
            return ele.id!==data.id
        })
        setSelectedChipList(tempSelectedChipList)
        const temp1=chipsData.filter((ele) => {
            const tempList=tempSelectedChipList.find((ele1) => {
                return ele1?.id===ele.id
            })
            if (tempList) {
                return false
            } else {
                return true
            }
        })
        setFilterChipList(temp1)
        setAnnounceMessage(`${data.name} removed. ${tempSelectedChipList.length} items selected.`)
        inputRef.current?.focus()
    }

    const chipKeyDownHandler=(event, data) => {
        if (event.code==="Enter") {
            deleteChipHandler(data)
        }
    }

    const keyboardHandler=(e) => {
        if (e.code==="ArrowDown") {
            e.preventDefault()
            const nextIndex=focusedIndex<filterChipList.length-1? focusedIndex+1:focusedIndex
            setFocusedIndex(nextIndex)
        } else if (e.code==="ArrowUp") {
            e.preventDefault()
            if (focusedIndex>0) {
                setFocusedIndex(focusedIndex-1)
            }
        } else if (e.code==="Enter") {
            e.preventDefault()
            if (focusedIndex>=0&&filterChipList[focusedIndex]) {
                selectChipHandler(filterChipList[focusedIndex])
                setFocusedIndex(-1)
                inputRef.current?.focus()
            }
        } else if (e.code==="Escape") {
            e.preventDefault()
            setOpenDropdownList(false)
            setFocusedIndex(-1)
        }
    }

    // Scroll focused option into view
    useEffect(() => {
        if (focusedIndex>=0&&optionsRef.current[focusedIndex]) {
            optionsRef.current[focusedIndex].scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            })
        }
    }, [focusedIndex])

    return (
        <div>
            <h1 id="combobox-label">ChipsSelectorDropdown</h1>

            {/* Screen reader announcements */}
            <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
            >
                {announceMessage}
            </div>

            <div className='mainContainer' role="group" aria-labelledby="combobox-label">
                {/* Selected chips as removable buttons */}
                {selectedChipList.length>0&&(
                    <div role="list" aria-label="Selected reviewers">
                        {selectedChipList.map((ele) => {
                            return (
                                <div
                                    role="listitem"
                                    className='selectedChipsContainer1'
                                    key={ele.id}
                                >
                                    <button
                                        type="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            chipKeyDownHandler(e, ele)
                                        }}
                                        onClick={() => {
                                            deleteChipHandler(ele)
                                        }}
                                        className='chipButton'
                                        aria-label={`Remove ${ele.name}`}
                                    >
                                        <span aria-hidden="true">{ele.name}</span>
                                        <img
                                            className='crossIcon'
                                            src={closeIcon}
                                            alt=""
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* Combobox input */}
                <input
                    onKeyDown={keyboardHandler}
                    onFocus={() => {
                        setOpenDropdownList(true)
                    }}
                    onBlur={() => {
                        setOpenDropdownList(false)
                    }}
                    onClick={() => {
                        setOpenDropdownList(true)
                    }}
                    ref={inputRef}
                    role="combobox"
                    aria-autocomplete="list"
                    aria-haspopup="listbox"
                    aria-expanded={openDropdownList}
                    aria-controls='dropdown-listbox'
                    aria-labelledby="combobox-label"
                    aria-activedescendant={
                        focusedIndex>=0? `dropdown-item-${focusedIndex}`:undefined
                    }
                    aria-describedby="input-description"
                    className='inputContainer'
                    id='inputField'
                    placeholder='Enter the Reviewer Name'
                    type="text"
                    value={chipInputText}
                    onChange={inputFieldHandler}
                />

                {/* Hidden description for screen readers */}
                <span id="input-description" className="sr-only">
                    Type to search and filter reviewers. Use arrow keys to navigate options.
                    Press Enter to select. Press Escape to close.
                    {selectedChipList.length>0&&` ${selectedChipList.length} reviewer${selectedChipList.length>1? 's':''} selected.`}
                </span>
            </div>

            {/* Dropdown listbox */}
            {openDropdownList&&(
                <div
                    id='dropdown-listbox'
                    role="listbox"
                    aria-label="Available reviewers"
                    className='listContainer'
                >
                    {filterChipList.length>0? (
                        filterChipList.map((ele, index) => {
                            return (
                                <div
                                    ref={(el) => optionsRef.current[index]=el}
                                    tabIndex={-1}
                                    onMouseDown={(e) => {
                                        e.preventDefault()
                                        selectChipHandler(ele)
                                    }}
                                    onMouseEnter={() => {
                                        setFocusedIndex(index)
                                    }}
                                    role="option"
                                    id={`dropdown-item-${index}`}
                                    aria-selected={focusedIndex===index}
                                    aria-posinset={index+1}
                                    aria-setsize={filterChipList.length}
                                    className={focusedIndex===index? "optionItem focused":"optionItem"}
                                    key={ele.id}
                                >
                                    <span>{ele.name}</span>
                                </div>
                            )
                        })
                    ):(
                        <div className="optionItem" role="option" aria-selected="false">
                            <span>No results found</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ChipsSelectorDropdown