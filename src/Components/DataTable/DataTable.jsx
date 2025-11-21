import React, {useState, useEffect} from 'react'
import {users} from "./constants"
import "./DataTable.css"

const tableHeader=[
    {label: 'ID', key: 'id'},
    {label: 'Name', key: 'name'},
    {label: 'Age', key: 'age'},
    {label: 'Occupation', key: 'occupation'},
]

function DataTable() {
    const [rowsPerPage, setRowsPerPage]=useState({
        limit: 5,
        offset: 0
    })
    const [page, setPage]=useState(1)
    const totalPages=Math.ceil(users.length/rowsPerPage.limit)


    const rowsPerPageHandler=(e) => {
        setRowsPerPage({
            limit: Number(e.target.value),
            offset: 0
        })
        setPage(1)
    }

    const prePageHandler=() => {
        setPage((prev) => {
            return prev-1
        })
    }

    useEffect(() => {
        setRowsPerPage((prev) => {
            return {
                limit: prev.limit,
                offset: (prev.limit)*(page-1)
            }
        })
    }, [page])

    const nextPageHandler=() => {
        setPage(page+1)
    }

    return (
        <div>
            <h2>Data Table</h2>
            <table>
                <thead>
                    <tr>
                        {tableHeader.map((ele) => {
                            const {key, label}=ele||{}
                            return <th key={key}>{label}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {

                        users.slice(rowsPerPage.offset, rowsPerPage.offset+rowsPerPage.limit).map((ele) => {
                            const {id, name, occupation, age}=ele||{}
                            return <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>{occupation}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div className='flex'>
                <select onClick={rowsPerPageHandler}>
                    <option value={5}>show 5</option>
                    <option value={10}>show 10</option>
                    <option value={20}>show 20</option>
                </select>
                <button onClick={prePageHandler} disabled={page===1}>Prev</button>
                page {page} of {totalPages}
                <button onClick={nextPageHandler} disabled={page===totalPages}  >Next</button>
            </div>
        </div>
    )
}

export default DataTable