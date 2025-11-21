import React, {useState} from 'react'
import ErrorBoundary from './ErrorBoundary'
import BuggyFunction from './BuggyFunction'

function ParentComponent() {
    const [shouldThrow, setShouldThrow]=useState(false)
    return (
        <div>
            <h1>React Error Boundary Demonstration</h1>
            <button
                onClick={() => setShouldThrow(true)}
            >
                Click to Cause an Error
            </button>
            {/* This part is protected. If BuggyComponent crashes, 
        the ErrorBoundary will display its fallback UI.
      */}
            <ErrorBoundary>
                <BuggyFunction shouldThrow={shouldThrow} />
            </ErrorBoundary>
            <h2>✅ Unaffected Area</h2>
            <p>This text always renders, proving the Error Boundary protected the main app.</p>
        </div>
    )
}

export default ParentComponent