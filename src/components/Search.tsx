import React, {ChangeEvent, JSX, useCallback, useRef, useState} from 'react';
import axios, {AxiosError} from "axios";

const Search = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const timer = useRef<any>(null!)
    const delay = 250;

    const debouncedCallback = useCallback((val: string) => {
        if (timer.current) {
            clearTimeout(timer?.current)
        }
        timer.current = setTimeout(() => {
            searchValue(val)
        }, delay)
    }, [delay])

    async function searchValue(searchValue: string) {
        try {
            const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&lang=en&appid=9c524706dbc1b41c216d1d7350c414fd`);
            console.log(data)
        } catch (e: unknown) {
            const error = e as AxiosError
            console.log(error.message)
        }

    }

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setValue(value)
        if(!value) return
        debouncedCallback(value)
    }


    return (
        <div className='flex w-full'>
            <input
                type="text"
                value={value}
                onChange={onChangeValue}
                className='px-3 py-1 rounded-l basis-full'/>
            <button
                className='flex justify-center items-center border-1 px-3 py-1 bg-emerald-400 rounded-r text-white hover:bg-emerald-500 transition '>Search
            </button>
        </div>
    );
};

export default Search;