import React, {useState} from 'react'
import './GenerateTable.css'

function GenerateTable() {
    const [dimensions, setDimensions]=useState({rows: 1, columns: 1})
    const inputChangeHandler=(e) => {
        if (e.target.name==="rows") {
            setDimensions({...dimensions, rows: Number(e.target.value)})
        }
        else if (e.target.name==="columns") {
            setDimensions({...dimensions, columns: Number(e.target.value)})
        }
    }
    const [generated2DTable, setGenerated2DTable]=useState(null)

    const submitHandler=() => {
        if (dimensions.rows<=0||dimensions.columns<=0) {
            alert('rows or colums values can not be lessthan 0')
            return
        }
        else if (dimensions.rows>10||dimensions.columns>10) {
            alert('rows or colums values can not be greaterthan 10')
            return
        }
        generateTable(dimensions.rows, dimensions.columns)
    }

    console.log('generated2DTable>>>>>', generated2DTable&&JSON.stringify(generated2DTable));



    const generateTable=(tableRows, tableColums) => {
        let columns=0
        let value=1
        const Array2D=new Array(tableRows).fill(0)
        for (let i=0;i<tableRows;i++) {
            const columsArray=new Array(tableColums).fill(0)
            Array2D[i]=columsArray
        }
        while (columns<tableColums) {
            if (columns%2===1) {
                let rows=tableRows-1
                while (rows>=0) {
                    Array2D[rows][columns]=value
                    value++
                    rows--
                }
            } else {
                let rows=0
                while (rows<tableRows) {
                    Array2D[rows][columns]=value
                    value++
                    rows++
                }
            }
            columns++
        }
        setGenerated2DTable(Array2D)
    }

    return <div>
        <div>Input values</div>
        <label htmlFor='rows'>Rows</label>
        <input required type="number" id='rows' name='rows' min={1} max={10} value={dimensions.rows} onChange={inputChangeHandler} />
        <label htmlFor='columns'>Columns</label>
        <input required type="number" id='columns' name='columns' min={1} max={10} value={dimensions.columns} onChange={inputChangeHandler} />
        <button onClick={submitHandler} >Submit</button>
        <div className="table-container">
            {generated2DTable&&Array.isArray(generated2DTable)&&(
                <table className="generated-table">
                    <tbody>
                        {generated2DTable.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    </div>
}

export default GenerateTable