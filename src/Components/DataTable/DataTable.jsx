import React, {useState, useEffect} from 'react'
import {users, selectUsersPerPageData} from "./constants"
import "./DataTable.css"

const tableHeader=[
    {label: 'ID', key: 'id', sorted: true},
    {label: 'Name', key: 'name', sorted: false},
    {label: 'Age', key: 'age', sorted: false},
    {label: 'Occupation', key: 'occupation', sorted: false},
]

function DataTable() {
    const [usersData, setUsersData]=useState(users)
    const [userTableHeaderData, setUserTableHeaderData]=useState(tableHeader)
    const [selectedOption, setSelectedOptions]=useState(null)
    const [paginationDetails, setPaginationDetails]=useState({start: 0, end: 0, pageNumber: 1, totalPages: 1})
    const [selectedTableHeader, setSelectedTableHeader]=useState(null)

    useEffect(() => {
        const selectedOption=selectUsersPerPageData.find((option) => {
            return option.selected===true
        })
        const selectedTableHeader=tableHeader.find((theader) => {
            return theader.sorted===true
        })
        if (selectedTableHeader) {
            setSelectedTableHeader(selectedTableHeader)
        }
        if (selectedOption) {
            const value=Number(selectedOption.value)
            setSelectedOptions(value)
            const obj={
                start: 0,
                end: value,
                pageNumber: 1,
                totalPages: Math.ceil(users.length/value)
            }
            setPaginationDetails(obj)
        }
    }, [])

    useEffect(() => {
        const slicedUsersList=users.slice(paginationDetails.start, paginationDetails.end)
        setUsersData(slicedUsersList)
    }, [paginationDetails])

    useEffect(() => {
        if (selectedTableHeader) {
            const obj={
                start: 0,
                end: selectedOption,
                pageNumber: 1,
                totalPages: Math.ceil(users.length/selectedOption)
            }
            setPaginationDetails(obj)
            if (selectedTableHeader?.sorted) {
                if (selectedTableHeader.key==='name'||selectedTableHeader.key==='occupation') {
                    const sortedData=users.sort((a, b) => {
                        return a[selectedTableHeader.key].localeCompare(b[selectedTableHeader.key])
                    }).slice(0, selectedOption)
                    setUsersData(sortedData)
                } else {
                    const sortedData=users.sort((a, b) => {
                        return a[selectedTableHeader.key]-b[selectedTableHeader.key]
                    }).slice(0, selectedOption)
                    setUsersData(sortedData)
                }
            } else {
                if (selectedTableHeader.key==='name'||selectedTableHeader.key==='occupation') {
                    const sortedData=users.sort((a, b) => {
                        return b[selectedTableHeader.key].localeCompare(a[selectedTableHeader.key])
                    }).slice(0, selectedOption)
                    setUsersData(sortedData)
                } else {
                    const sortedData=users.sort((a, b) => {
                        return b[selectedTableHeader.key]-a[selectedTableHeader.key]
                    }).slice(0, selectedOption)

                    setUsersData(sortedData)
                }
            }
        }
    }, [selectedTableHeader])

    console.log("usersData>>>>>>>", usersData);
    console.log("paginationDetails>>>>>>", paginationDetails);



    const selectUsersPerPageHandler=(e) => {
        e.preventDefault()
        const value=Number(e.target.value)
        setSelectedOptions(value)
        const obj={
            start: 0,
            end: value,
            pageNumber: 1,
            totalPages: Math.ceil(users.length/value)
        }
        setPaginationDetails(obj)
    }

    const nextPageClickHandler=(e) => {
        e.preventDefault()
        setPaginationDetails((prev) => {
            return {
                ...prev,
                start: prev.end,
                end: prev.end+selectedOption,
                pageNumber: prev.pageNumber+1
            }
        })
    }

    const previousPageClickHandler=(e) => {
        e.preventDefault()
        setPaginationDetails((prev) => {
            return {
                ...prev,
                start: prev.start-selectedOption,
                end: prev.start,
                pageNumber: prev.pageNumber-1
            }
        })
    }

    const tableHeaderClickHandler=(tableHeader) => {
        const tempTableHeaderData=userTableHeaderData.map((ele) => {
            if (ele.key===tableHeader.key) {
                return {
                    ...ele,
                    sorted: !ele.sorted
                }
            } else {
                return ele
            }
        })
        setUserTableHeaderData(tempTableHeaderData)
        setSelectedTableHeader({...tableHeader, sorted: !tableHeader.sorted})
    }


    return <div className='container'>
        <table>
            <thead>
                <tr>
                    {userTableHeaderData.map((tableHeader) => {
                        return <th key={tableHeader.key} onClick={() => tableHeaderClickHandler(tableHeader)} >{tableHeader.label}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {usersData.map((user) => {
                    return <tr key={user.id} >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.occupation}</td>
                    </tr>
                })}
            </tbody>
        </table>
        <div className='verticalSeperator'></div>
        <div className='flex justifyBetween'>
            <select defaultValue={selectedOption} onChange={selectUsersPerPageHandler}>
                {selectUsersPerPageData.map((selectOption) => {
                    return <option key={selectOption.value}
                        value={selectOption.value}
                    >
                        {selectOption.displayText}
                    </option>
                })}
            </select>
            <button onClick={previousPageClickHandler} disabled={paginationDetails.pageNumber===1}>Prev</button>
            <div>
                page <span>{paginationDetails.pageNumber}</span> of <span>{paginationDetails.totalPages}</span>
            </div>
            <button
                disabled={paginationDetails.pageNumber===paginationDetails.totalPages}
                onClick={nextPageClickHandler}
            >Next</button>
        </div>
    </div>
}

export default DataTable