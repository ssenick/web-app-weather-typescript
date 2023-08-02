import React, {JSX} from 'react';
import Header from "./components/Header";
import Search from "./components/Search";
import useFetching from "./hooks/useFetching";

enum Gradient {
    main = 'bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400',
}

const App = (): JSX.Element => {

    return (
        <div className={`flex justify-center items-center   ${Gradient.main}  h-[100vh] w-full `}>
            <div
                className='flex flex-col items-center justify-center  gap-5  w-full h-full md:max-w-[500px] mx-3  py-4 md:py-4 md:px-10 lg:px-14 h-full  bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
                <Header/>
                <main className='w-full'>
                    <Search/>
                </main>
            </div>
        </div>
    );
};

export default App;