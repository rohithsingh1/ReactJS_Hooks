import React from 'react'

function HigherOrderComponent(WrappedComponent) {
    return function EnchancedComponent({isLoading, ...props}) {
        if (isLoading) {
            return <div>is loading.....</div>
        }
        return <WrappedComponent {...props} />
    }
}

export default HigherOrderComponent