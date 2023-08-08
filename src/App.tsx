import React, {FC, useEffect} from 'react';
import {Forecast, Header, Search} from "./components";
import './styles/App.scss'
import useSearchForecast from "./hooks/useSearchForecast";


const App: FC = () => {
    const dataForecast = useSearchForecast()
    useEffect(()=>{
        console.log(dataForecast.allData)
    },[dataForecast.allData])
    return (
        <div className='app'>
            <div
                className='app__container'>
                <div className="app__wrapper">
                <Header/>
                <main className='main'>
                    <Search {...dataForecast}/>
                    <Forecast/>
                </main>

                </div>
            </div>
        </div>

    );
};

export default App;