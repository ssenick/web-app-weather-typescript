import React, {ChangeEvent, FC, useState} from 'react';
import axios, {AxiosError} from "axios";
import useDebounce from "../hooks/useDebounce";
import {GlobalOption} from "../type";
import {GLOBAL_CITY, KEY} from "../API";




const Search: FC = () => {
    const [city, setCity] = useState<string>('')
    const debounce = useDebounce(fetchingCity,350)
    const [errorOptions,setErrorOptions] = useState('');
    const [isLoadingOptions,setIsLoadingOptions] = useState(false);

    async  function fetchingCity   (value:string)  {
        try {
            setIsLoadingOptions(true)
           const {data} =  await axios.get<GlobalOption[]>(`${GLOBAL_CITY}?q=${value}&limit=5&appid=${KEY}`);
        } catch (e:unknown){
            const error = e as  AxiosError
            setErrorOptions(error.message)
        } finally {
            setIsLoadingOptions(false)
        }
    }



    const onChangeCity =  (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setCity(value)
        if (value === '') return
        debounce(value)
    }

    console.log(isLoadingOptions)

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

