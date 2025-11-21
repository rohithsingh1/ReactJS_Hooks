import React from 'react'
import HigherOrderComponents from './HigherOrderComponents'
import ChildHelloComponent from './ChildHelloComponent'

const HelloWrapperComponent=HigherOrderComponents(ChildHelloComponent)

function ParentHOC() {
    return (
        <div>
            <h1>ParentHOC</h1>
            <HelloWrapperComponent name={"rohith"} />
        </div>
    )
}

export default ParentHOC