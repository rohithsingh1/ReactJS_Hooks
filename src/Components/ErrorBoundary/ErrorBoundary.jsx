import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state={hasError: false}
    }

    // 1. Lifecycle method to update state when an error is caught
    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI to render when an error occurs
            return (
                <div style={{padding: '20px', border: '2px solid red', color: 'red'}}>
                    <h2>🚨 Something went wrong with this component.</h2>
                    <p>We apologize for the inconvenience. The rest of the app should still work.</p>
                </div>
            );
        }

        // Render the children normally if no error
        return this.props.children
    }
}

export default ErrorBoundary