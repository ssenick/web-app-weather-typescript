import React, {ChangeEvent, FC, useRef, useState} from 'react';
import axios from "axios";
import {GLOBAL_CITY, KEY} from "../API";
import useDebounce from "../hooks/useDebounce";


const Search: FC = () => {
    const [city, setCity] = useState<string>('')
    const debounce = useDebounce(fetchingCity,500)
    
    async  function fetchingCity   (value:string)  {
        await axios.get(`${GLOBAL_CITY}?q=${value}&limit=5&appid=${KEY}`)
            .then(response => console.log(response))
            .catch((e) => console.log(e))
            .finally(() => console.log)
        console.log(city)
    }



    const onChangeCity =  (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setCity(value)
        if (value === '') return
        debounce(value)
    }


    return (
        <div className='flex w-full'>
            <input
                type="text"
                value={city}
                onChange={onChangeCity}
                className='px-3 py-1 rounded-l basis-full'/>
            <button
                className='flex justify-center items-center border-1 px-3 py-1 bg-emerald-400 rounded-r text-white hover:bg-emerald-500 transition '>Search
            </button>
        </div>
    );
};

export default Search;

