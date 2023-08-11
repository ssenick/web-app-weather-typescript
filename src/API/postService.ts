import axios from "axios";
import {GLOBAL_CITY, API_KEY, GLOBAL_TEST, API_KEY_NOT_GOOD} from "./index";
import {AllData, GlobalOption} from "../type";

export default class PostService {
    static async getOptions(value: string) {
        const {data} = await axios.get<GlobalOption[]>(`${GLOBAL_CITY}?q=${value}&limit=5&appid=${API_KEY}`);
        return data
    }

    static async getForecast({lat, lon}: { lat: string, lon: string }) {
        const {data} = await axios.get<AllData>(`${GLOBAL_TEST}?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${API_KEY_NOT_GOOD}`);
        return data
    }
}



// static async getWeather({lat, lon}: { lat: string, lon: string }) {
//     const {data} = await axios.get<GlobalOption[]>(`${GLOBAL_WEATHER}?lat=${lat}&lon=${lon}&units=metric&cnt=16&appid=${API_KEY}`);
//     return data
// }
//
// static async getForecast({lat, lon}: { lat: string, lon: string }) {
//     const {data} = await axios.get<GlobalOption[]>(`${GLOBAL_FORECAST}?lat=${lat}&lon=${lon}&units=metric&cnt=16&appid=${API_KEY}`);
//     return data
// }

// static async getAll({lat, lon}: { lat: string, lon: string }) {
//     const endpoints = [
//         `${GLOBAL_WEATHER}?lat=${lat}&lon=${lon}&units=metric&cnt=16&lang=en&appid=${API_KEY}`,
//         `${GLOBAL_FORECAST}?lat=${lat}&lon=${lon}&units=metric&cnt=16&lang=en&appid=${API_KEY}`
//     ]
//
//     const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
//
//     return {
//         'weather': response[0].data,
//         'forecast': response[1].data,
//         status:true
//     } as AllData
// }
