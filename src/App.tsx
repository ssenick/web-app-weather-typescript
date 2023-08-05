import './App.css'
import React, {FC} from 'react';
import {Forecast, Header, Search} from "./components";



const App:FC = () => {

    return (
        <div className='app'>
            <div
                className='app__container'>
                <Header/>
                <main className='main'>
                    <Search/>
                    <Forecast/>
                </main>
            </div>
        </div>
    );
};

export default App;