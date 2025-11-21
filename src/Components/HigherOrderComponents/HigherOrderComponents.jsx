import React from 'react'

function HigherOrderComponents(WrappedComponent) {
    return function EnhancedComponent(props) {
        const enachedProps={age: 26}
        return <WrappedComponent {...props} {...enachedProps} />
    }
}

export default HigherOrderComponents