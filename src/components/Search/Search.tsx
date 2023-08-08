import React, {FC} from 'react';
import { DataForecast, GlobalOption} from "../../type";
import {Loader} from "../index";
import './Search.scss'

const Search: FC<DataForecast> = ({
                                      term,
                                      onChangeCity,
                                      errorOptions,
                                      errorAllData,
                                      isLoadingOptions,
                                      onSubmitHandler,
                                      city,
                                      options,
                                      setOption
                                  }) => {

    return (
        <div onClick={e => e.stopPropagation()} className='search'>
            <div className='search__wrapper'>
                <div className='search__input'>
                    <input
                        type="text"
                        value={term}
                        onChange={onChangeCity}
                    />
                    {errorOptions || errorAllData &&
                       <div className='search__error'>Error: <span>{errorOptions || errorAllData}</span></div>
                    }
                    {isLoadingOptions &&
                       <div className='search__loader'>
                          <Loader w='20px' h='20px'/>
                       </div>
                    }
                </div>
                <button onClick={onSubmitHandler} disabled={!city} className='search__button'>Search</button>
                <ul className='search__options'>
                    {options.map((elem: GlobalOption) =>
                        <li key={`${elem.lat}${elem.lon}`} className='search__option'>
                            <button onClick={() => setOption(elem)}>{elem.name}, {elem.country}</button>
                        </li>)}
                </ul>
            </div>
        </div>

    );
};

export default Search;

