import {useCallback, useRef} from "react";


export default function useDebounce(callback: (...args : string[]) => void, delay:number) {
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);


    const debouncedCallback = useCallback((...args: string[])  => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
}