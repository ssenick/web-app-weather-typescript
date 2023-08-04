import './App.css'
import React, {FC} from 'react';
import Header from "./components/Header";
import Search from "./components/Search";



const App:FC = () => {

    return (
        <div className='app'>
            <div
                className='app__container'>
                <Header/>
                <main className='main'>
                    <Search/>
                </main>
            </div>
        </div>
    );
};

export default App;