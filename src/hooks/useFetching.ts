import {useState} from "react";

const BASE_URL = 'http://api.openweathermap.org'
const KEY = '9c524706dbc1b41c216d1d7350c414fd'

const useFetching =() => {
    const [city, setCity] = useState()
    const [term, setTerm] = useState<string>('london')
    const [options, setOptions] = useState<[]>([])
    const [forecast, setForecast] = useState(null)

    const getSearchOptions = async (term: string) => {
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&lang=en&appid=9c524706dbc1b41c216d1d7350c414fd`
        )
            .then((res) => res.json())
            .then((data) => setOptions(data))
            .catch((e) => console.log({ e }))
    }

}


export default useFetching;