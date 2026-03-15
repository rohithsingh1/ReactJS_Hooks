import React from 'react'
import VirtualizationList from './VirtualizationList'

function VirtualizationParent() {
    const list=Array.from({length: 10000}, (_, index) => index)
    return (
        <div>
            <h1>Virtualized List</h1>
            <VirtualizationList list={list} containerHeight={600} itemHeight={30} />
        </div>
    )
}

export default VirtualizationParent