import {ChangeEvent, useEffect, useState} from "react";
import {AllData, GlobalOption} from "../type";
import useDebounce from "./useDebounce";
import PostService from "../API/postService";
import {AxiosError} from "axios";

 const useSearchForecast = () => {
    const [term, setTerm] = useState('')
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
            // const response = await PostService.getAll({
            //     lat: option.lat.toString(),
            //     lon: option.lon.toString()
            // })
            const response = await PostService.getForecast({
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


     return {
         term,
         errorOptions,
         errorAllData,
         allData,
         isLoadingAllData,
         isLoadingOptions,
         city,
         options,
         onSubmitHandler,
         onChangeCity,
         setOption
     }

}

export default useSearchForecast
