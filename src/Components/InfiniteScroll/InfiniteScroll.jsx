import React, {useState, useEffect} from 'react'
const baseUrl="https://jsonplaceholder.typicode.com/posts";
const LIMIT=20;
import useDebounce from './hooks/useDebounce';

function InfiniteScroll() {
    const [apiData, setApiData]=useState([])
    const [isFetched, setIsFetched]=useState(false)
    const [pageNo, setPageNo]=useState(1)
    const [errorMsg, setErrorMsg]=useState(null)
    const [hasMoreData, setHasMoreData]=useState(true);

    useEffect(() => {
        try {
            async function fetchPostsData() {
                const apiResponse=await fetch(`${baseUrl}?_page=${pageNo}&_limit=${LIMIT}`)
                const apiResponseData=await apiResponse.json()
                console.log("apiResponseData>>>>>>>>", apiResponseData);
                if (Array.isArray(apiResponseData)) {
                    if (apiResponseData.length===0) {
                        setHasMoreData(false);
                    }
                    setIsFetched(true)
                    setErrorMsg(null)
                    setApiData((prev) => {
                        if (pageNo===1) {
                            return [...apiResponseData]
                        } else {
                            return [...prev, ...apiResponseData]
                        }
                    })
                }
            }

            fetchPostsData()
        } catch (error) {
            console.log("error>>>>>>", error);
            setIsFetched(false)
            setErrorMsg('some thing went wrong')
        }
    }, [pageNo])

    useEffect(() => {
        const onScroll=() => {
            if (
                document.body.scrollHeight-500<
                window.scrollY+window.innerHeight&&
                hasMoreData
            ) {
                console.log("condition is true>>>>>>");
                setPageNo((p) => p+1);
            }
        };
        const debouncedFn=useDebounce(onScroll, 800);
        window.addEventListener("scroll", debouncedFn);
        return () => window.removeEventListener("scroll", debouncedFn);
    }, [hasMoreData]);

    console.log("apiData>>>>>>>>", apiData);

    if (isFetched) {
        return (
            <div>
                <h1>Your Feed</h1>
                <ol>
                    {apiData.map((post, index) => {
                        return (
                            <li
                                key={post.id}
                            >
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    } else if (errorMsg) {
        return <div>Error....</div>;
    } else {
        return <div>fetching.....</div>;
    }
}

export default InfiniteScroll