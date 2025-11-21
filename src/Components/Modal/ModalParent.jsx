import React, {useState} from 'react'
import Modal from './Modal'


function ModalParent() {
    const [showModal, setShowModal]=useState(false);
    return (
        <div>
            <h2>React Portal Example</h2>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            {showModal&&<Modal>
                <h3>This is a modal rendered using a Portal</h3>
                <button onClick={() => setShowModal(false)}>Close</button></Modal>}
        </div>
    )
}

export default ModalParent