import React, {FC, useEffect, useState} from 'react';
import {Forecast, Header, Loader, Search} from "./components";
import './styles/App.scss'
import useSearchForecast from "./hooks/useSearchForecast";
import {AllData} from "./type";


const App: FC = () => {
    const dataForecast = useSearchForecast()
    const [forecastData,setForecastData] = useState<AllData | null>(null);
    useEffect(()=>{
        console.log(dataForecast.allData)
        setForecastData(dataForecast.allData)
    },[dataForecast.allData])
    return (
        <div className='app'>
            <div className='app__container'>
                <div className="app__wrapper">
                    <div className="app__header">
                        <Header/>
                        <Search {...dataForecast}/>
                    </div>

                <main className='app__main'>
                    {dataForecast.isLoadingAllData && <Loader/>}
                    {forecastData &&  <Forecast {...forecastData} />}
                </main>

                </div>
            </div>
        </div>

    );
};

export default App;