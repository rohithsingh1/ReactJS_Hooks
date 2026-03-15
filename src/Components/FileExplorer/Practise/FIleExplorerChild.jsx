import React, {useState} from 'react'

function FIleExplorerChild(props) {
    const {title, id, children, marginLeft, isFolderOpen, setIsFolderOpen, addItemToFolder}=props
    const [contextMenu, setContextMenu]=useState({visible: false, x: 0, y: 0})
    const [showInput, setShowInput]=useState({visible: false, type: ''}) // type: 'folder' or 'file'
    const [inputValue, setInputValue]=useState('')

    const handleContextMenu=(e) => {
        e.preventDefault() // Prevent default browser context menu
        e.stopPropagation()
        setContextMenu({
            visible: true,
            x: e.clientX,
            y: e.clientY
        })
    }

    const handleCloseContextMenu=() => {
        setContextMenu({visible: false, x: 0, y: 0})
    }

    const handleAddItem=(type) => {
        setShowInput({visible: true, type: type})
        handleCloseContextMenu()
    }

    const handleInputSubmit=(e) => {
        if (e.key==='Enter'&&inputValue.trim()) {
            e.preventDefault()
            e.stopPropagation()
            const newItem={
                title: inputValue.trim(),
                id: Date.now(),
                children: showInput.type==='folder'? []:null
            }
            addItemToFolder(id, newItem)
            setInputValue('')
            setShowInput({visible: false, type: ''})
        } else if (e.key==='Escape') {
            setInputValue('')
            setShowInput({visible: false, type: ''})
        }
    }

    const handleInputBlur=() => {
        if (inputValue.trim()) {
            const newItem={
                title: inputValue.trim(),
                id: Date.now(),
                children: showInput.type==='folder'? []:null
            }
            addItemToFolder(id, newItem)
        }
        setInputValue('')
        setShowInput({visible: false, type: ''})
    }

    return (
        <div onClick={handleCloseContextMenu}>
            <div
                onClick={(e) => {
                    if (children!==null&&children!==undefined) {
                        setIsFolderOpen(id)
                    }
                }}
                onContextMenu={(e) => {
                    if (children!==null&&children!==undefined) {
                        handleContextMenu(e)
                    }
                }}
                style={{marginLeft: marginLeft, display: "flex", position: "relative"}}
                className={`${children!==null&&children!==undefined? "pointer boldText":""}`}
            >
                <div>{title}</div>
                {children!==null&&children!==undefined&&children?.length>=0&&<div style={{marginLeft: "4px"}}>
                    {isFolderOpen?.[id]? <span>[-]</span>:<span>[+]</span>}
                </div>}
            </div>

            {/* Context Menu */}
            {contextMenu.visible&&(
                <div
                    style={{
                        position: "fixed",
                        top: contextMenu.y,
                        left: contextMenu.x,
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                        zIndex: 1000,
                        minWidth: "150px",
                        padding: "4px 0"
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        style={{
                            padding: "8px 16px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor="#f0f0f0"
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor="white"
                        }}
                        onClick={() => handleAddItem('folder')}
                    >
                        Add Folder
                    </div>
                    <div
                        style={{
                            padding: "8px 16px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor="#f0f0f0"
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor="white"
                        }}
                        onClick={() => handleAddItem('file')}
                    >
                        Add File
                    </div>
                    <div
                        style={{
                            padding: "8px 16px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor="#f0f0f0"
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor="white"
                        }}
                        onClick={() => {
                            handleCloseContextMenu()
                        }}
                    >
                        Delete
                    </div>
                </div>
            )}

            {/* Input field for new folder/file name */}
            {showInput.visible&&(
                <div style={{marginLeft: marginLeft+16, marginTop: "4px"}}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleInputSubmit}
                        onBlur={handleInputBlur}
                        placeholder={`Enter ${showInput.type} name...`}
                        autoFocus
                        style={{
                            padding: "4px 8px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            outline: "none",
                            fontSize: "14px"
                        }}
                    />
                </div>
            )}

            {children!==null&&children!==undefined&&isFolderOpen?.[id]&&children?.map((ele) => {
                return (
                    <div key={ele?.id} >
                        <FIleExplorerChild
                            {...ele}
                            marginLeft={marginLeft+16}
                            isFolderOpen={isFolderOpen}
                            setIsFolderOpen={setIsFolderOpen}
                            addItemToFolder={addItemToFolder}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default FIleExplorerChild