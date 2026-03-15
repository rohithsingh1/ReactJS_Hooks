import {useRef} from "react";

export const useThrottle=(asyncFn, limit) => {
    const lastExecuted=useRef(0);
    const inFlightPromise=useRef(null);
    const abortControllerRef=useRef(null);

    return async (...args) => {
        const now=Date.now();

        // If within throttle window → return existing promise
        if (
            inFlightPromise.current&&
            now-lastExecuted.current<limit
        ) {
            return inFlightPromise.current;
        }

        // 🚫 Abort previous request
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // ✅ Create new controller
        const controller=new AbortController();
        abortControllerRef.current=controller;

        // Execute new call
        lastExecuted.current=now;
        inFlightPromise.current=asyncFn(...args, controller.signal);

        try {
            const result=await inFlightPromise.current;
            return result;
        } catch (error) {
            if (error.name==="AbortError") {
                console.log("Request aborted");
            } else {
                throw error;
            }
        } finally {
            // Clear promise AFTER throttle time
            setTimeout(() => {
                inFlightPromise.current=null;
            }, limit);
        }
    }
};
