import {result as data} from './data'
import {useRef} from 'react'

export const mockAPIHandler=(value, startIndex=0, endIndex=10, signal) => {
    console.log(`mockAPIHandler called with: value="${value}", startIndex=${startIndex}, endIndex=${endIndex}`);

    return new Promise((resolve, reject) => {
        const timeoutId=setTimeout(() => {
            if (signal?.aborted) {
                reject(new DOMException("Aborted", "AbortError"));
                return;
            }
            const allFilteredData=data.data.filter((ele) => {
                return ele.name.toLowerCase().includes(value.toLowerCase())
            })

            const paginatedData=allFilteredData.slice(startIndex, endIndex)
            console.log(`Filtered ${allFilteredData.length} items, returning ${paginatedData.length} items from index ${startIndex}`);
            return resolve(paginatedData)
        }, 800)

        // ⛔ Abort handling
        signal?.addEventListener("abort", () => {
            clearTimeout(timeoutId);
            reject(new DOMException("Aborted", "AbortError"));
        });
    })
}

export const useDebounce=(cb, delay) => {
    const timerRef=useRef(null)
    const abortRef=useRef(null);
    return (...args) => {
        return new Promise((resolve, reject) => {

            // ⛔ Abort previous request
            if (abortRef.current) {
                abortRef.current.abort();
            }

            // Create new controller
            const controller=new AbortController();
            abortRef.current=controller;

            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
            timerRef.current=setTimeout(async () => {
                try {
                    const result=await cb(...args, controller.signal)
                    resolve(result)
                } catch (error) {
                    if (error.name!=="AbortError") {
                        reject(error);
                    }
                }
            }, delay)
        })
    }
}