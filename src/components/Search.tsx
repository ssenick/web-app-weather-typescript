import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {AxiosError} from "axios";
import {AllData, GlobalOption} from "../type";
import useDebounce from "../hooks/useDebounce";
import PostService from "../API/postService";
import {Loader} from "./index";


const Search: FC = () => {
    const [term, setTerm] = useState<string>('')
    const [options, setOptions] = useState<GlobalOption[]>([]);
    const [city, setCity] = useState<GlobalOption | null>(null);
    const [allData, setAllData] = useState<AllData| null>(null);
    const [isLoadingOptions, setIsLoadingOptions] = useState(false);
    const [isLoadingAllData, setIsLoadingAllData] = useState(false);
    const [errorOptions, setErrorOptions] = useState('');
    const [errorAllData, setErrorAllData] = useState('');
    const debounceCity = useDebounce(fetchingCity, 350)


    // Can be moved to a separate hook, but I have not yet figured out how to type it
    async function fetchingCity(value: string) {
        try {
            setIsLoadingOptions(true)
            const data = await PostService.getOptions(value)
            setOptions(data)
            setErrorOptions('')
        } catch (e: unknown) {
            const error = e as AxiosError
            setErrorOptions(error.message)
        } finally {
            setIsLoadingOptions(false)
        }
    }
    // Can be moved to a separate hook, but I have not yet figured out how to type it
    async function fetchingForecast(option: GlobalOption) {
        try {
            setIsLoadingAllData(true)
            const response = await PostService.getAll({
                lat: option.lat.toString(),
                lon: option.lon.toString()
            })
            setAllData(response)
            setErrorAllData('')
        } catch (e: unknown) {
            const error = e as AxiosError
            setErrorAllData(error.message)
        } finally {
            setIsLoadingAllData(false)
        }
    }

    const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setTerm(value)
        if (value === '') {
            setOptions([])
            setCity(null)
            return
        }
        debounceCity(value)
    }

    const setOption = (option: GlobalOption) => {
        setCity(option)
        setTerm(option.name)
        setOptions([])
    }

    const clickOutside = () => {
        setOptions([])
        console.log(1)
    }
    const onSubmitHandler = () => {
        if (!city) return
        fetchingForecast(city)
    }

    useEffect(() => {
        document.addEventListener('click', clickOutside)
        return () => {
            document.removeEventListener('click', clickOutside)
        }
    }, [])

    return (
        <div onClick={e => e.stopPropagation()} className='search'>
            <div className='search__wrapper'>
                <div className='search__input'>
                    <input
                        type="text"
                        value={term}
                        onChange={onChangeCity}
                    />
                    {errorOptions || errorAllData &&
                       <div className='search__error'>Error: <span>{errorOptions || errorAllData}</span></div>
                    }
                    {isLoadingOptions &&
                       <div className='search__loader'>
                          <Loader w='20px' h='20px'/>
                       </div>
                    }
                </div>
                <button onClick={onSubmitHandler} disabled={!city} className='search__button'>Search...</button>

                <ul className='search__options'>
                    {options.map((elem: GlobalOption) =>
                        <li key={`${elem.lat}${elem.lon}`} className='search__option'>
                            <button onClick={() => setOption(elem)}>{elem.name}, {elem.country}</button>
                        </li>)}
                </ul>
            </div>
        </div>

    );
};

export default Search;

