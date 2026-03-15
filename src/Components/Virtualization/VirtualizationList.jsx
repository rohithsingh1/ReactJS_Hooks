import React, {useState, useRef, useEffect, useCallback} from 'react'

function VirtualizationList({list, containerHeight, itemHeight}) {
    const [scrollTop, setScrollTop]=useState(0);
    const listRef=useRef(null);

    const visibleItemCount=Math.ceil(containerHeight/itemHeight);
    const totalHeight=list.length*itemHeight;

    const startIndex=Math.floor(scrollTop/itemHeight);
    const endIndex=Math.min(startIndex+visibleItemCount+1, list.length);

    const onScroll=useCallback((event) => {
        setScrollTop(event.target.scrollTop);
    }, []);

    useEffect(() => {
        const listElement=listRef.current;
        if (listElement) {
            listElement.addEventListener("scroll", onScroll);
            return () => {
                listElement.removeEventListener("scroll", onScroll);
            };
        }
    }, [onScroll]);

    const displayItems=() => {
        const visibleItems=[];

        for (let i=startIndex;i<endIndex;i++) {
            const item=list[i];
            const itemStyle={
                position: "absolute",
                top: `${i*itemHeight}px`,
                height: `${itemHeight}px`,
                left: 0,
                right: 0
            };
            visibleItems.push(
                <div key={i} style={itemStyle}>
                    Item : {item}
                </div>
            );
        }

        return visibleItems;
    };

    return (
        <div
            ref={listRef}
            style={{
                height: containerHeight,
                overflowY: "auto",
                position: "relative",
            }}
        >
            <div style={{height: totalHeight}}>{displayItems()}</div>
        </div>
    );
};

export default VirtualizationList