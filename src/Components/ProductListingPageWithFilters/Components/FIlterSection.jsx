import React, {useState} from 'react'

function FilterSection({filterData, onClickHandler}) {
    return (
        <div>
            <h3>{filterData?.title}</h3>
            {filterData?.values?.map((filters) => {
                return <div key={filters?.key} style={{borderTop: '1px solid gray', marginTop: 12}}  >
                    <div style={{marginTop: 8}} >{filters?.title}</div>
                    {filters?.values?.map((ele) => {
                        return <div onClick={(e) => {
                            onClickHandler({parentFilterKey: filters?.key, childFilterkey: ele?.key, isSelected: !ele.selected})
                        }} key={ele?.key} style={{padding: 12, display: "flex", gap: 8, alignItems: "center", cursor: "pointer"}} >
                            <input checked={Boolean(ele.selected)} style={{cursor: "pointer"}} type="checkbox" id={ele.key} value={Boolean(ele.selected)} />
                            <label style={{cursor: "pointer"}} htmlFor={ele.key} >{ele.name}</label>
                        </div>
                    })}
                </div>
            })}
        </div>
    )
}

export default FilterSection