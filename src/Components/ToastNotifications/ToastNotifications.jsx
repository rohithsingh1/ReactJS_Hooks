import React, {useEffect, useState, useCallback, useRef} from 'react'
import "./ToastNotifications.css"
import closeIcon from "./close.png"

const MAX_VISIBLE_TOASTS=10; // Only show 3 at a time

const ReusableToastNotifications=({success, message, duration, onClose}) => {
    // We use a Ref to ensure we only trigger onClose once
    const timerRef=useRef(null);

    useEffect(() => {
        timerRef.current=setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timerRef.current);
    }, [duration, onClose]);

    return (
        <div
            className={success? 'successNotification':'failNotification'}
            style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                minWidth: "200px"
            }}
        >
            <div style={{flex: 1}}>{message}</div>
            <button
                onClick={onClose}
                aria-label="Close notification"
                style={{background: 'none', border: 'none', cursor: 'pointer'}}
            >
                <img src={closeIcon} width={12} height={12} alt="" aria-hidden="true" />
            </button>
        </div>
    );
}


function ToastNotifications() {
    const [toasts, setToasts]=useState([]);

    const addToast=() => {
        const id=Date.now()+Math.random();
        setToasts((prev) => [...prev, {id, message: `Success Notification`}]);
    };

    // Memoize the remove function so it doesn't change on every click
    const removeToast=useCallback((id) => {
        setToasts((prev) => prev.filter(toast => toast.id!==id));
    }, []);

    return (
        <div>
            <h2>ToastNotifications</h2>
            <button onClick={addToast}>Add Toast Notifications</button>
            {/* Use a Flex container with 'flex-direction: column' and 'gap'.
                This ensures spacing is handled by the browser, not by index logic.
            */}
            <div role="status"
                aria-live="polite"
                aria-atomic="true"
                aria-relevant="additions"
                style={{
                    position: "fixed",
                    top: 20,
                    right: 20,
                    zIndex: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px", // This replaces your marginTop logic
                    alignItems: "flex-end"
                }}>
                {toasts.slice(0, MAX_VISIBLE_TOASTS).map((toast) => (
                    <ReusableToastNotifications
                        key={toast.id}
                        message={`${toast.message} -- ${toast.id.toFixed(0).slice(-3)}`}
                        duration={3000}
                        success={true}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ToastNotifications