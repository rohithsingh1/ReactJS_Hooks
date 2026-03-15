import React, {useEffect, useRef, useState} from "react";

const baseUrl="https://jsonplaceholder.typicode.com/posts";
const LIMIT=20;

function InfiniteScroll() {
    const [apiData, setApiData]=useState([]);
    const [isFetched, setIsFetched]=useState(false);
    const [pageNo, setPageNo]=useState(1);
    const [errorMsg, setErrorMsg]=useState(null);
    const [hasMoreData, setHasMoreData]=useState(true);
    const [isLoading, setIsLoading]=useState(false);
    const loaderRef=useRef(null);

    useEffect(() => {
        const controller=new AbortController();

        async function fetchPostsData() {
            try {
                setIsLoading(true);
                const apiResponse=await fetch(`${baseUrl}?_page=${pageNo}&_limit=${LIMIT}`, {
                    signal: controller.signal
                });
                if (!apiResponse.ok) {
                    throw new Error("Failed to fetch posts");
                }
                const apiResponseData=await apiResponse.json();

                if (Array.isArray(apiResponseData)) {
                    if (apiResponseData.length<LIMIT) {
                        setHasMoreData(false);
                    }
                    setIsFetched(true);
                    setErrorMsg(null);
                    setApiData((prev) => {
                        if (pageNo===1) {
                            return [...apiResponseData];
                        } else {
                            return [...prev, ...apiResponseData];
                        }
                    });
                }
            }
            catch (error) {
                if (error.name!=="AbortError") {
                    setIsFetched(false);
                    setErrorMsg("Something went wrong");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        fetchPostsData();

        return () => controller.abort();
    }, [pageNo]);

    useEffect(() => {
        const observer=new IntersectionObserver(
            (entries) => {
                const firstEntry=entries[0];
                if (firstEntry.isIntersecting&&hasMoreData&&!isLoading) {
                    setPageNo((prev) => prev+1);
                }
            },
            {root: null, rootMargin: "250px", threshold: 0.1}
        );

        if (loaderRef.current) observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, [hasMoreData, isLoading]);

    if (isFetched) {
        return (
            <div>
                <h1>Your Feed</h1>
                <ol>
                    {apiData.map((post) => {
                        return (
                            <li key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </li>
                        );
                    })}
                </ol>
                {isLoading&&<p>Loading more...</p>}
                {!hasMoreData&&<p>No more posts</p>}
                <div ref={loaderRef} style={{height: "1px"}} />
            </div>
        );
    } else if (errorMsg) {
        return <div>Error....</div>;
    } else {
        return <div>fetching.....</div>;
    }
}

export default InfiniteScroll
