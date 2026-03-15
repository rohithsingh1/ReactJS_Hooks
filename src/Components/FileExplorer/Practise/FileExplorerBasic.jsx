import React, {useState, useEffect} from 'react'
import './FileExplorerBasic.css'
import {fileExplorerData} from './constants'
import FIleExplorerChild from './FIleExplorerChild'

function FileExplorerBasic() {
    const [localFileExplorerData, setLocalFileExplorerData]=useState(fileExplorerData)
    const [localFileExplorerIsopenObj, setLocalFileExplorerIsopenObj]=useState(null)

    useEffect(() => {
        let obj={}
        function recursiveFileExplorerDataHandler(fileExplorerData) {
            fileExplorerData?.forEach((ele) => {
                const {children, id}=ele||{}
                if (children&&children?.length>0) {
                    obj={
                        ...obj,
                        [id]: false
                    }
                    return recursiveFileExplorerDataHandler(children)
                }
            })
        }
        recursiveFileExplorerDataHandler(localFileExplorerData)
        setLocalFileExplorerIsopenObj(obj)
    }, [localFileExplorerData])

    // Function to add a new item (folder or file) to a specific parent
    const addItemToFolder=(parentId, newItem) => {
        const addItemRecursively=(items) => {
            return items.map((item) => {
                if (item.id===parentId) {
                    // Ensure the folder is open when adding a new item
                    // setLocalFileExplorerIsopenObj((prev) => ({
                    //     ...prev,
                    //     [parentId]: true
                    // }))

                    return {
                        ...item,
                        children: item.children? [...item.children, newItem]:[newItem]
                    }
                }
                if (item.children&&item.children.length>0) {
                    return {
                        ...item,
                        children: addItemRecursively(item.children)
                    }
                }
                return item
            })
        }

        setLocalFileExplorerData(addItemRecursively(localFileExplorerData))
    }

    return (
        <div>
            <h2>FileExplorerBasic</h2>
            {localFileExplorerData.map((data) => {
                return <div key={data.id} >
                    <FIleExplorerChild
                        {...data}
                        marginLeft={0}
                        isFolderOpen={localFileExplorerIsopenObj}
                        setIsFolderOpen={(id) => {
                            const isOpen=localFileExplorerIsopenObj[id]
                            setLocalFileExplorerIsopenObj((prev) => {
                                return {
                                    ...prev,
                                    [id]: !isOpen
                                }
                            })
                        }}
                        addItemToFolder={addItemToFolder}
                    />
                </div>
            })}
        </div>
    )
}

export default FileExplorerBasic