import React from 'react'

function ChildHelloComponent(props) {
    return (
        <div>
            <h2>default props--- {props.name}</h2>
            <h2>Enchanned props--- {props.age}</h2>
        </div>
    )
}

export default ChildHelloComponent