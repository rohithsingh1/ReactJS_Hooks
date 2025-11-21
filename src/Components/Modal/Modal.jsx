import React from 'react'
import ReactDOM from "react-dom";

function Modal({children}) {
    const portalRoot=document.getElementById("portal-root");

    return ReactDOM.createPortal(
        <div style={styles.overlay}>
            <div style={styles.modal}>{children}</div>
        </div>, portalRoot
    )
}

export default Modal


const styles={
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    modal: {
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
    },
};