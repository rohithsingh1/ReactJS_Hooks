import React, {useRef} from 'react'

function ShowModal({title, children}) {
    const dialogRef=useRef(null)

    const showModalHandler=() => {
        dialogRef.current.showModal()
    }

    const closeModalHandler=() => {
        dialogRef.current.close()
    }
    return (
        <div>
            <button onClick={showModalHandler}>Show Modal</button>
            <dialog ref={dialogRef} >
                <h2>{title}</h2>
                {children}
                <button onClick={closeModalHandler}>Close Modal</button>
            </dialog>
        </div>
    )
}

export default ShowModal