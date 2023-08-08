import {ChangeEvent} from "react";

export interface GlobalOption {
    name: string
    country: string
    lat: number,
    lon: number
}

export type AllData = {
    forecast: {},
    weather: {},
    status: boolean
}


export type DataForecast = {
    term: string,
    errorOptions: string,
    errorAllData: string,
    allData: AllData | null,
    isLoadingAllData: boolean,
    isLoadingOptions: boolean,
    city: GlobalOption | null,
    options: GlobalOption[],
    onSubmitHandler: () => void,
    onChangeCity: (e: ChangeEvent<HTMLInputElement>) => void,
    setOption: (option: GlobalOption) => void
}