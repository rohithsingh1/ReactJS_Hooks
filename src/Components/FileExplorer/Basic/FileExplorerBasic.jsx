import React, {useEffect, useState} from 'react'
import {data} from './constants'
import FileExplorerChild from './FileExplorerChild'

function FileExplorerParentBasic() {
    const [fileExplorerOpenData, setFileExplorerOpenData]=useState(null)

    const setFileExplorerOpenDataHandler=(data) => {
        const obj={}
        const resursiveTraversal=(childData) => {
            childData?.forEach((ele) => {
                if (ele?.children) {
                    obj[ele.id]={
                        id: ele.id,
                        isOpen: false
                    }
                    resursiveTraversal(ele.children)
                }
            })
        }
        resursiveTraversal(data)
        setFileExplorerOpenData(obj)
    }

    useEffect(() => {
        setFileExplorerOpenDataHandler(data)
    }, [])

    return (
        <div>
            <h2 id="file-explorer-label">FileExplorerBasic</h2>
            <div role="tree" aria-labelledby="file-explorer-label">
                <FileExplorerChild
                    setFileExplorerOpenData={setFileExplorerOpenData}
                    toggleData={fileExplorerOpenData}
                    data={data.sort((a, b) => {
                        return a.name.localeCompare(b.name)
                    })}
                    marginLeftValue={0}
                    level={1}
                />
            </div>
        </div>
    )
}

export default FileExplorerParentBasic