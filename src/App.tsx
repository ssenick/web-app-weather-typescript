import React, {FC, useEffect, useState} from 'react';
import {Forecast, Header, Loader, Search} from "./components";
import './styles/App.scss'
import useSearchForecast from "./hooks/useSearchForecast";
import {AllData} from "./type";
import PostService from "./API/postService";


const App: FC = () => {
    const dataForecast = useSearchForecast()
    const [forecastData, setForecastData] = useState<AllData | null>(null);
    useEffect(() => {
        console.log(dataForecast.allData)
        setForecastData(dataForecast.allData)
        console.log(dataForecast.city)
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
                    {dataForecast.isLoadingAllData && <div className="app__loader"><Loader w='80px' h='80px'/></div>}

                </div>
            </div>
        </div>

    );
};

export default App;