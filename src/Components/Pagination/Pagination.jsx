import React, {useState, useEffect, useMemo, useCallback} from "react";
import './Pagination.css'

const paginationIndexArray=({totalPages}) => {
    console.log("paginationIndexArray>>>>>>>>");

    const noOfIterations=Math.ceil(totalPages/5)
    const array=Array.from({length: totalPages}, (_, index) => index+1);
    let start=0
    let end=5
    const newArray=[]
    for (let i=0;i<noOfIterations;i++) {
        newArray.push(array.slice(start, end))
        start=end
        end=end+5
    }
    return newArray
}

function Pagination({selectedPage, totalPages}) {
    const [currentPage, setCurrentPage]=useState(Number(selectedPage));
    const [pageSlice, setPageSlice]=useState(0)

    const memoizedPageList=useMemo(() => paginationIndexArray({totalPages: totalPages}), []);

    const nextClickHandler=() => {
        if (currentPage!==totalPages) {
            const currentpageSlice=memoizedPageList[pageSlice]
            const nextPage=currentPage+1
            const lastIndex=currentpageSlice[currentpageSlice.length-1]
            // if (nextPage<=lastIndex) {
            //     setCurrentPage(nextPage)
            // } else {
            //     setCurrentPage(nextPage)
            //     setPageSlice((prev) => prev+1)
            // }
            if (nextPage>lastIndex) {
                setPageSlice((prev) => prev+1)
            }
            setCurrentPage(nextPage)
        }
    }

    const prevClickHandler=() => {
        if (currentPage!==1) {
            const currentpageSlice=memoizedPageList[pageSlice]
            const previousPage=currentPage-1
            const firstIndex=currentpageSlice[0]
            // if (previousPage>=firstIndex) {
            //     setCurrentPage(previousPage)
            // } else {
            //     setCurrentPage(previousPage)
            //     setPageSlice((prev) => prev-1)
            // }
            if (previousPage<firstIndex) {
                setPageSlice((prev) => prev-1)
            }
            setCurrentPage(previousPage)
        }
    }

    console.log("currentPage,pageSlice>>>>>>", currentPage, pageSlice);



    return <div className="flex">
        <button disabled={currentPage===1} onClick={prevClickHandler}>prev</button>
        <div className="flex">
            {memoizedPageList?.[pageSlice]?.map((ele) => {
                const selected=Number(ele)===currentPage
                return (
                    <div key={ele} onClick={() => {
                        setCurrentPage(Number(ele))
                    }} className={`${selected? 'selectedpage':''}`}>{ele}</div>
                )
            })}
        </div>
        <button disabled={currentPage===totalPages} onClick={nextClickHandler}>next</button>
    </div>;
}

export default Pagination;
