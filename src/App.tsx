import React, { useEffect, useState} from 'react';
import useSearchForecast from "./hooks/useSearchForecast";
import {Forecast, Header, Search} from "./components";
import {AllData} from "./type";
import './styles/App.scss'



const App = () => {
    const dataForecast = useSearchForecast()
    const [forecastData, setForecastData] = useState<AllData | null>(null);
    useEffect(() => {
        setForecastData(dataForecast.allData)

    }, [dataForecast.allData])
    const onClickCloseBtn = () => {
        setForecastData(null)
    }
    return (
        <div className='app'>
            <div className='app__container'>
                {forecastData && <button onClick={onClickCloseBtn} className="app__close">X</button>}
                <div className="app__wrapper">
                    {forecastData && dataForecast.city
                        ?
                        <main className='app__main'>
                            <Forecast cityData={dataForecast.city} data={forecastData} />
                        </main>
                        :
                        <div className="app__header">
                            <Header/>
                            <Search {...dataForecast}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default App;