import {ChangeEvent} from "react";

export interface GlobalOption {
    name: string
    country: string
    lat: number,
    lon: number
}

type ListItem = {
    dt:number,
    dt_txt:string,
    main:{
        temp:number
    }
    weather:[
        {icon:string}
    ]
}

export type AllData = {
    forecast: {
        list:ListItem[]
    },
    weather: {
        name:string,
        sys:{
            country:string,
            sunrise:number,
            sunset:number
        }
        main:{
            feels_like: number,
            humidity: number,
            pressure:number,
            temp:number,
            temp_max:number,
            temp_min:number

        },
        visibility:number,
        weather:[
            {
                description:string,
                icon:string,
                main:string
            }
        ],
        wind:{
            speed:number,
            deg:number
        }
    },
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