import React, {ChangeEvent, FC, useRef, useState} from 'react';
import axios, {AxiosError} from "axios";
import useDebounce from "../hooks/useDebounce";
import {GlobalOption} from "../type";
import {GLOBAL_CITY, KEY} from "../API";


const Search: FC = () => {
    const [city, setCity] = useState<string>('')
    const debounce = useDebounce(fetchingCity, 350)
    const [options, setOptions] = useState<GlobalOption[] | null>(null);
    const [errorOptions, setErrorOptions] = useState('');
    const [isLoadingOptions, setIsLoadingOptions] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null)

    async function fetchingCity(value: string) {
        try {
            setIsLoadingOptions(true)
            const {data} = await axios.get<GlobalOption[]>(`${GLOBAL_CITY}?q=${value}&limit=5&appid=${KEY}`);
            setOptions(data)
        } catch (e: unknown) {
            const error = e as AxiosError
            setErrorOptions(error.message)
        } finally {
            setIsLoadingOptions(false)
        }
    }


    const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setCity(value)
        if (value === '') {
            console.log(111)
            setOptions(null)
            return
        }
        debounce(value)
    }

const onFocus = () => {
}
    return (
        <div className='search'>
            <div className='search__wrapper'>
                <input
                    ref={inputRef}
                    type="text"
                    value={city}
                    onChange={onChangeCity}
                    onFocus={onFocus}
                    />
                <button className='search__button'>Search</button>
                {city && options  &&
                   <ul className='search__options'>
                       {options.map((elem:GlobalOption)  =>
                           <li key={`${elem.let}${elem.lon}`} className='search__option'>
                               <button>{elem.name}, {elem.country}</button>
                           </li>)}
                   </ul>
                }

            </div>
        </div>

    );
};

export default Search;

