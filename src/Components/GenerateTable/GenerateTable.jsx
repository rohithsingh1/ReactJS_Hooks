import React, {useRef, useState} from 'react'
import './GenerateTable.css'

function GenerateTable() {
    const [dimensions, setDimensions]=useState({rows: 1, colums: 1})
    const [specialArray, setSpecialArray]=useState([])

    const generateTableHandler=() => {
        const reverse=(arr, start, end) => {
            let i=start
            let j=end
            while (i<j) {
                const temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
                i++
                j--
            }
            return arr
        }
        const rows=Number(dimensions.rows)
        const colums=Number(dimensions.colums)
        let arr=new Array(rows*colums).fill(0).map((_, index) => {
            return index+1
        })
        let rotate=false
        for (let i=0;i<(rows*colums);i=i+rows) {
            if (rotate) {
                arr=reverse(arr, i, i+rows-1)
            }
            rotate=!rotate
        }
        const newArray=[]
        for (let inc=0;inc<rows;inc++) {
            const tempArr=[]
            for (let i=inc;i<(rows*colums);i=i+rows) {
                tempArr.push(arr[i])
            }
            newArray.push(tempArr)
        }
        console.log("newArray>>>>>>", newArray);

        setSpecialArray(newArray)
    }
    return (
        <div className='flex flexColumn'>
            <div>
                <label>Rows: </label>
                <input value={dimensions.rows} onChange={(e) => {
                    setDimensions({...dimensions, rows: e.target.value})
                }} type="number" min={1} />
            </div>
            <div>
                <label>Columns: </label>
                <input value={dimensions.colums} onChange={(e) => {
                    setDimensions({...dimensions, colums: e.target.value})
                }} type="number" min={1} />
            </div>
            <button className='marginTop16' onClick={generateTableHandler}>Submit</button>
            <div className='resultContainer flex flexCenter marginTop16' >
                {specialArray.length>0&&<table>
                    <tbody>
                        {specialArray.map((row, index) => {
                            return <tr key={`rows-${index}`}>
                                {row.map((ele, index) => {
                                    return <td key={`colums-${index}`} >{ele}</td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>}
            </div>
        </div>
    )
}

export default GenerateTable