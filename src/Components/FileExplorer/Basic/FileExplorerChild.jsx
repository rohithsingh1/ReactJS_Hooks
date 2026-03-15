import React, {useState} from 'react'
import "./FileExplorerBasic.css"

function FileExplorerChild({data, marginLeftValue, toggleData, setFileExplorerOpenData, level=1}) {
    const onClickHandler=(specificFolderData) => {
        const specificToggleData=toggleData[specificFolderData.id]
        const updateToggleData={
            ...toggleData,
            [specificFolderData.id]: {
                ...specificToggleData,
                isOpen: !specificToggleData.isOpen
            }
        }
        setFileExplorerOpenData(updateToggleData)
    }

    return (
        <React.Fragment>
            {data?.map((ele1, index) => {
                const hasChildren=ele1?.children&&ele1.children.length>0
                const isExpanded=hasChildren&&toggleData?.[ele1.id]?.isOpen

                return <div key={ele1?.id} >
                    <div
                        role="treeitem"
                        aria-posinset={index+1}
                        aria-expanded={hasChildren? isExpanded:undefined}
                        onClick={() => {
                            if (hasChildren) {
                                onClickHandler(ele1)
                            }
                        }}
                        style={{marginLeft: marginLeftValue}}
                        className={`${hasChildren? 'boldText pointer':''} `}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (hasChildren&&(e.key==='Enter'||e.key===' ')) {
                                e.preventDefault()
                                onClickHandler(ele1)
                            }
                        }}
                    >
                        <span>{ele1?.name}</span>
                        {
                            hasChildren?
                                <span className='marginLeft8px'>
                                    {
                                        isExpanded?
                                            <span>[-]</span>:
                                            <span>[+]</span>
                                    }
                                </span>:
                                null
                        }
                    </div>
                    {hasChildren&&isExpanded?
                        <div role="group">
                            <FileExplorerChild
                                setFileExplorerOpenData={setFileExplorerOpenData}
                                toggleData={toggleData}
                                marginLeftValue={marginLeftValue+20}
                                level={level+1}
                                data={ele1.children?.sort((a, b) => {
                                    return a.name.localeCompare(b.name)
                                })}
                            />
                        </div>
                        :
                        null
                    }
                </div>
            })}
        </React.Fragment>
    )
}

export default FileExplorerChild