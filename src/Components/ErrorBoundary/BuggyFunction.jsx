import React from 'react'

function BuggyFunction({shouldThrow}) {

    if (shouldThrow) {
        // This line will throw a JS error during the render phase
        throw new Error('I crashed! (Intentionally thrown error)');
    }
    return (
        <h1>I am a perfectly normal component.</h1>
    )
}

export default BuggyFunction