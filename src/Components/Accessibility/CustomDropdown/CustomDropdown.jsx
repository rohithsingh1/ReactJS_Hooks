import React, {useState, useRef, useEffect} from 'react'
import './CustomDropdown.css'
import downArrow from './down-arrow.png'

const customDropdownData={
    label: "Please Select the Patient Name",
    options: [
        {
            id: 100001,
            name: "Rohith"
        },
        {
            id: 100002,
            name: "Anubhav"
        },
        {
            id: 100003,
            name: "Mahesh"
        },
        {
            id: 100004,
            name: "Nandhini"
        }
    ]
}

function CustomDropdown() {
    const [selectedOption, setSelectedOption]=useState(null)
    const [openDropdown, setOpenDropdown]=useState(false)
    const [focusedIndex, setFocusedIndex]=useState(-1)
    const dropdownRef=useRef(null)

    const toggleDropdownSelectHandler=() => {
        setOpenDropdown(!openDropdown)
        if (openDropdown) {
            // Reset focused index when closing
            setFocusedIndex(-1)
        }
    }

    const selectOptionFromDropdownHandler=(ele) => {
        setSelectedOption(ele)
        setOpenDropdown(false)
        setFocusedIndex(-1)
    }

    const dropdownHandlerByKeyboard=(event) => {
        event.preventDefault()

        if (event.code==="Enter") {
            if (!openDropdown) {
                // Open dropdown
                setOpenDropdown(true)
                setFocusedIndex(-1)
            } else if (focusedIndex>=0) {
                // Select the focused option
                selectOptionFromDropdownHandler(customDropdownData.options[focusedIndex])
            }
        }
        else if (event.code==="ArrowDown") {
            if (!openDropdown) {
                // Open dropdown and focus first option
                setOpenDropdown(true)
                setFocusedIndex(0)
            } else {
                // Move focus to next option
                const nextIndex=focusedIndex<customDropdownData.options.length-1? focusedIndex+1:focusedIndex
                setFocusedIndex(nextIndex)
            }
        }
        else if (event.code==="ArrowUp") {
            if (openDropdown&&focusedIndex>0) {
                // Move focus to previous option
                setFocusedIndex(focusedIndex-1)
            }
        }
        else if (event.code==="Escape") {
            if (openDropdown) {
                setOpenDropdown(false)
                setFocusedIndex(-1)
                // Return focus to dropdown trigger
                dropdownRef.current?.focus()
            }
        }
    }

    return (
        <div>
            <h2>CustomDropdown</h2>
            <div className='dropdownContainer' >
                <label>
                    <div
                        ref={dropdownRef}
                        tabIndex={0}
                        onKeyDown={dropdownHandlerByKeyboard}
                        onClick={() => {
                            toggleDropdownSelectHandler()
                        }}
                        className='labeldivContainer'
                        role="combobox"
                        aria-expanded={openDropdown}
                        aria-haspopup="listbox"
                        aria-controls='dropdown_listbox'
                        aria-activedescendant={focusedIndex>=0? `dropdown-option-${focusedIndex}`:undefined}
                    >
                        <span>{selectedOption? selectedOption.name:customDropdownData.label}</span>
                        <img src={downArrow} alt="dropdown arrow" className={openDropdown? "dropdownArrow open":"dropdownArrow"} />
                    </div>
                </label>
                {openDropdown&&<div id='dropdown_listbox' className="listContainer" role="listbox">
                    {customDropdownData.options.map((ele, index) => {
                        return <div
                            tabIndex={-1}
                            onClick={() => {
                                selectOptionFromDropdownHandler(ele)
                            }}
                            id={`dropdown-option-${index}`}
                            key={ele.id}
                            className={focusedIndex===index? 'optionItem focused':'optionItem'}
                            role="option"
                            aria-selected={focusedIndex===index}
                        >
                            <span className='option'>{ele.name}</span>
                        </div>
                    })}
                </div>}
            </div>
        </div>
    )
}

export default CustomDropdown