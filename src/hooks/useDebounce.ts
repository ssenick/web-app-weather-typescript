// import {useRef} from "react";
//
// const  useDebounce = (callback:()=> void,delay :number)  => {
//     const timer = useRef<ReturnType<typeof setInterval> | null>(null)
//     if(timer.current){
//         clearTimeout(timer.current )
//     }
//     timer.current = setInterval(async (...arg:)=>{
//         await callback(..arg)
//     },delay)
// }
import {useCallback, useRef} from "react";


export default function useDebounce(callback: (...args : any[]) => void, delay:number) {
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);


    const debouncedCallback = useCallback((...args: any[])  => {
        if (timer.current) {
            clearTimeout(timer.current);

        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
}